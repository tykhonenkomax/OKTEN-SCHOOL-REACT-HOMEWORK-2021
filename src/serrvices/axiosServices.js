import link from "../links/jsonLinks";
import axios from "axios";

const axiosServices = axios.create({baseURL: link})

export {axiosServices};