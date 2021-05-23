import axios from "axios";
import * as AxiosLogger from "axios-logger";

import { getIdToken } from "../Auth";

const axiosClient = axios.create({
  baseURL: "http://localhost:3001",
});

axiosClient.defaults.headers.common["Content-Type"] =
  "application/json;charset=UTF-8";

axiosClient.interceptors.request.use(AxiosLogger.requestLogger);
// axiosClient.interceptors.request.use(AxiosLogger.responseLogger);

const getUsers = async () => {
  const idToken = await getIdToken();

  if (!idToken) {
    console.log(idToken, "-----------------");
    return [];
  }

  const usersResult = await axiosClient.post(
    "users",
    {},
    {
      headers: {
        idToken,
      },
    }
  );

  return usersResult.data.data.users ?? [];
};

const createUser = async (params) => {
  const result = await axiosClient.post("/user", params);
  return result.data;
};

export { getUsers, createUser };
