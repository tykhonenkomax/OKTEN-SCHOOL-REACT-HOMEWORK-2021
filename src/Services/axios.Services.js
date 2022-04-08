import axios from "axios";
import linkRequestFromJson from "../requests/requestsJSON";

let axiosService = axios.create({linkRequestFromJson})

export {linkRequestFromJson}