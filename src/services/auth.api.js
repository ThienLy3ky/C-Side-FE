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
  login: ({ user_name, password }) => {
    return http.post("v1/auth/login", { user_name, password });
  },
};
