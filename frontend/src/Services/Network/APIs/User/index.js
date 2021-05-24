import axiosClient from "../..";

const getUsers = async () => {
  const usersResult = await axiosClient.get("users");
  return usersResult?.data?.data?.users ?? [];
};

const createUser = async (params) => {
  const result = await axiosClient.post("/user", params);
  return result.data;
};

export { getUsers, createUser };
