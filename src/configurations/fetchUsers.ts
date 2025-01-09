import axios from "axios";

const apiUrl = axios.create({
  baseURL: "https://run.mocky.io/v3/350642f5-4fc3-421c-bfe9-b827b3861d85",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const fetchUsers = async () => {
  const { data } = await apiUrl.get("/");
  return data;
};
