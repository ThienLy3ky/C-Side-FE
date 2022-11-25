import axios from "axios";
import {
  clearAccessTokenFromLS,
  getAccessTokenFromLS,
  setAccessTokenToLS,
} from "../utils/auth";
import { authAPI } from "./auth.api";
let accessToken = getAccessTokenFromLS();
let refreshToken = null;

export const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  function (config) {
    if (
      config.url.indexOf("/login") >= 0 &&
      config.url.indexOf("/refreshToken") >= 0
    ) {
      return config;
    }
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
http.interceptors.response.use(
  function (response) {
    const { url } = response.config;
    if (url === "/login") {
      accessToken = response.data.access_token;
      setAccessTokenToLS(accessToken);
    } else if (url === "/logout") {
      clearAccessTokenFromLS();
      accessToken = "";
    }
    return response;
  },
  function (error) {
    console.log("error", error);
    if (error.response.status === 401) {
      refreshToken = refreshToken
        ? refreshToken
        : authAPI.refreshToken().finally(() => {
          refreshToken = null;
        });
      return refreshToken
        .then((access_token) => {
          error.response.config.Authorization = access_token;
          http(error.response.config);
        })
        .catch((refreshTokenError) => {
          throw refreshTokenError;
        });
    }
    return Promise.reject(error);
  }
);
