import {axiosServices} from "./AxiosServices";
import {urls} from "../Urls";

const usersServices ={
    getAll: ()=>axiosServices.get(urls.users),
    getById:(id)=>axiosServices.get(`${urls.users}/${id}`)
}
const postsServices ={
    getAllPosts: ()=>axiosServices.get(urls.posts),
    getByIdPosts:(id)=>axiosServices.get(`${urls.posts}/${id}`)
}
export {usersServices,postsServices}