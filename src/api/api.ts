import axios, { type AxiosInstance } from "axios";
const api: AxiosInstance = axios.create({
  baseURL: "https://young-shore-83453.herokuapp.com/api/v2/",
  headers: {
    frontendKey: "mvm-msc",
  },
});
export default api;
