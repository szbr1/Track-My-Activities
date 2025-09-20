import axios from "axios";

export const userAxios = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8000/api",
});

export const roomAxios = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8000/api/room",
})

export const chatAxios = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8000/api/chat",
})