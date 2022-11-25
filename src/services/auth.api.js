import { getRefreshTokenFromLS } from "../utils/auth";
import { http } from "./http";

export const authAPI = {
  refreshToken: async () => {
    const refresh_token = getRefreshTokenFromLS();
    try {
      const res = http.post("/refresh", {
        refresh_token,
      });
      const { access_token } = res.date;
      return access_token;
    } catch (error) {
      localStorage.clear();
      throw error.message;
    }
  },
  login: ({ email, password }) => {
    return http.post("auth/login", { email, password });
  },
  register: ({ email, password, name, phone = '', address = '' }) => {
    return http.post("auth/register", { email, password, name, phone, address });
  },
  logout: () => {
    return http.post("auth/logout");
  },
};
