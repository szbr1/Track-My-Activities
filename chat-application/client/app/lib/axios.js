import axios from "axios";
//whill
const axiosInstance = axios.create({
  baseURL: /api,
  withCredentials: true,
});

export default axiosInstance;
