import {axiosServices} from "./AxiosServices";
import urls, {links} from "../Urls/Urls";

const postServices={
    getAll:()=>axiosServices.get(links.posts),
        getById:(id)=>axiosServices.get(`${links.users}/${id}`),
    getAllUsers:()=>axiosServices.get(links.posts),
    getByIdUsers:(id)=>axiosServices.get(`${links.users}/${id}`)
}
export {postServices}