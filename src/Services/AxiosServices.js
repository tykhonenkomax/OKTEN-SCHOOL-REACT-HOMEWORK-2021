import axios from "axios";
import baseURL from "../Links/Urls";

const axiosServices = axios.create({baseURL});

export {axiosServices}