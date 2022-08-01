import axios from "axios";

const GogoClient = axios.create({
  baseURL: "https://gurenapi.herokuapp.com/",
});

export { GogoClient };
