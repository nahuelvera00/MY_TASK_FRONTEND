import axios from "axios";
import env from "react-dotenv";

const API_URL = env.BACKEND_URL;
const clientAxios = axios.create({
  baseURL: `${API_URL}`,
});

export default clientAxios;
