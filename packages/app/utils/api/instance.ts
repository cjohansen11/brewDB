import axios from "axios";

const brewDBInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  withCredentials: true,
});

export { brewDBInstance };
