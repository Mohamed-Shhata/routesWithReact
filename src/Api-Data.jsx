import axios from "axios";

export const getAllUsers = async () => {
  return await axios.get("https://jsonplaceholder.typicode.com/users");
};

export const getUserByID = async (id) => {
  return await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
};
