import axios from "axios";

const apiUrl = axios.create({
  baseURL: "https://run.mocky.io/v3/43c8048b-fa51-4e9c-9cd1-fa7e72f91981",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const fetchUsers = async () => {
  const { data } = await apiUrl.get("/");
  return data;
};
