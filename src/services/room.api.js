import { http } from "./http";

export const roomAPI = {
  create: (data) => {
    return http.post("rooms/create", data);
  },
  edit: (room_id, data) => {
    return http.put(`rooms/${room_id}`, data);
  },
  getAll: (pageSize, pageNumber) => {
    return http.get(`rooms?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  },
  getDetail: (room_id) => {
    return http.get(`rooms/${room_id}`);
  },
  Remove: (room_id) => {
    return http.delete(`rooms/${room_id}`);
  },
};
