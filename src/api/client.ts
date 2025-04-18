import axios from "axios";
const client = axios.create({
  baseURL: "https://digivoter-server.onrender.com/",
});

export default client;
