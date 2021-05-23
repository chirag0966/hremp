import axios from "axios";

const getUsers = async () => {
  const usersResult = await axios.get("http://localhost:3001/users");
  return usersResult.data.data.users ?? [];
};

const createUser = async (params) => {
  const result = await axios.post("http://localhost:3001/user", params);
  return result.data;
};

export { getUsers, createUser };
