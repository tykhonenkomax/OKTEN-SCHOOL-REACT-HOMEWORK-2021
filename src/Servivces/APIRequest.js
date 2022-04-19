import {axiosServices} from "./AxiosServices";
import {urls} from "../Urls";

const usersServices ={
    getAll: ()=>axiosServices.get(urls.users),
    getById:(id)=>axiosServices.get(`${urls.users}/${id}`)
}
const postsServices ={
    getAllPosts: ()=>axiosServices.get(urls.posts),
    getByIdPosts: (id)=>axiosServices.get(`${urls.posts}/${id}`)
}

const commentsServices ={
    getAllComments: ()=>axiosServices.get(urls.comments),
    getByIdComments: (id)=>axiosServices.get(`${urls.comments}/${id}`)
}

export {usersServices,postsServices, commentsServices}