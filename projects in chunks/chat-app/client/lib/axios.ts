import axios from "axios";

export const userAxios = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8000/api",
});
