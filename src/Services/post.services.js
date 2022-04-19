import {axiosServices} from "./axios.services";
import {urls} from "../Urls";

const postServices ={
    getAll: ()=>axiosServices.get(urls.posts),
    getById: (id)=>axiosServices.get(`${urls.posts}/${id}`)
}
export {postServices};