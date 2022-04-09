import link from "../Links/jsonLinks";
import axios from "axios";

const axiosServices = axios.create({baseURL: link})

export {axiosServices};