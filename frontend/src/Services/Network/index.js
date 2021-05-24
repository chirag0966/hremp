import axios from "axios";
import * as AxiosLogger from "axios-logger";

var axiosClient = axios.create({
  baseURL: "http://localhost:3001",
});

axiosClient.defaults.headers.common["Content-Type"] =
  "application/json;charset=UTF-8";

axiosClient.interceptors.request.use(AxiosLogger.requestLogger);
// axiosClient.interceptors.request.use(AxiosLogger.responseLogger);

export default axiosClient;
