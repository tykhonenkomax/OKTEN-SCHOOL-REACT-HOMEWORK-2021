import axios from "axios";
import baseURL from "../Constants/Urls";

const axiosServices=axios.create({baseURL});

export {axiosServices}