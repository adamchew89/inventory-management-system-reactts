// Libraries
import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_IMS_JAVA_URL}/api/products`,
  timeout: 1000,
});

export default instance;
