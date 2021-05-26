import axios from "axios";
import * as AxiosLogger from "axios-logger";
import Firebase from "../Firebase";

var axiosClient = axios.create({
  baseURL: "http://localhost:3001",
});

axiosClient.defaults.headers.common["Content-Type"] =
  "application/json;charset=UTF-8";

// Request interceptor to log requests
axiosClient.interceptors.request.use(AxiosLogger.requestLogger);

// TODO: Fix backend to send proper response which can logged
// axiosClient.interceptors.request.use(AxiosLogger.responseLogger);

// Request interceptor to add latest idToken to the headers
axiosClient.interceptors.request.use(
  async (config) => {
    const idToken = await Firebase.auth().currentUser?.getIdToken();
    config.headers = {
      idToken,
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    };
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosClient;
