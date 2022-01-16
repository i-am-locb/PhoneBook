import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3000/",
});

export const authAPI = {
  login(email, password) {
    return instance.post(`login`, { email: email, password: password });
  },
};

