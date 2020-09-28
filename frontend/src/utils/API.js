import axios from "axios";

// Change the baseURL to the servers web address
// in production
export default axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
  credentials: "include",
});
