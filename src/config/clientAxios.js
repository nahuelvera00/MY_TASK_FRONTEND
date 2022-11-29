import axios from "axios";
import env from "react-dotenv";
const clientAxios = axios.create({
  baseURL: `${env.API_URL}`,
});

export default clientAxios;
