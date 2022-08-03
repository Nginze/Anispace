import axios from "axios";

const GogoClient = axios.create({
  baseURL: "http://localhost:5000",
});

export { GogoClient };
