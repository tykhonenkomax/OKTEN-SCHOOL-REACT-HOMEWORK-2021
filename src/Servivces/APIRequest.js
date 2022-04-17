import {axiosServices} from "./AxiosServices";
import {urls} from "../Urls";

const usersServices ={
    getAll: ()=>axiosServices.get(urls.users),
    getById:(id)=>axiosServices.get(`${urls.users}/${id}`)
}
export {usersServices}