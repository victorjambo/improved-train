import axios from "axios";

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const url = process.env.BACKEND_API || "http://localhost:4000/";

export const http = axios.create({
  baseURL: `${url}api/`,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    ...(typeof window !== 'undefined' && {Authorization: `Bearer ${localStorage?.getItem("token")?.replaceAll("\"", "")}`}),
  },
});
