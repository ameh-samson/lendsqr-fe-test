import axios from "axios";

const apiUrl = axios.create({
  baseURL: "https://run.mocky.io/v3/c471795b-795f-45cd-a33f-8b65bcb776b3",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const fetchUsers = async () => {
  const { data } = await apiUrl.get("/");
  return data;
};
