import axios from "axios";
import baseURL from "../Urls/Urls";

const axiosServices = axios.create({baseURL});

export {
    axiosServices
}