import axios from "axios";
const client = axios.create({
  baseURL: "https://digi-voter-server.vercel.app/",
});

export default client;
