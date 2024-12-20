import axios from "axios";

const apiUrl = axios.create({
  baseURL: "https://run.mocky.io/v3/4a6a46ee-335d-45c5-b897-5e7bfd89040f",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const fetchUsers = async () => {
  const { data } = await apiUrl.get("/");
  return data;
};
