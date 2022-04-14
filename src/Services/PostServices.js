import {axiosServices} from "./AxiosServices";
import {urls} from "../Constants";

const postServices ={
    getAll: ()=>axiosServices.get(urls.posts),
    getById: (id)=>axiosServices.get(`${urls.posts}/${id}`)
}
export {postServices}