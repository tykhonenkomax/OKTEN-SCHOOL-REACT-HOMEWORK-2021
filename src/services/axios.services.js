import axios from "axios";
import baseURL from "../configs/Urls";

let axiosServices = axios.create({baseURL})

export default axiosServices;