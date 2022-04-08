import jsonRequest from "../JsoRequests/requests";
import axios from './axios'

let axiosService= axios.create({jsonRequest})

export {axiosService};