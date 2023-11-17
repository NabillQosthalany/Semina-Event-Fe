import axios from "axios";
import errorHandler from "./errorHandler";

const instatance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});
instatance.interceptors.response.use((response) => response.data, errorHandler);

export default instatance;
