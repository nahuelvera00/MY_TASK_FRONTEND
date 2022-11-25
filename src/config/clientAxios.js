import axios from "axios";

const clientAxios = axios.create({
  baseURL: `${process.env.BACKEND_URL}`,
});

export default clientAxios;
