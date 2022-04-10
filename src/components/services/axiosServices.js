import axios from "axios";
import baseUrl from "../links/links";

let axiosServices = axios.create({baseURL:baseUrl})

export {axiosServices};