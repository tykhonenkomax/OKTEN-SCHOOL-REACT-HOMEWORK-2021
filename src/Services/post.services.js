import {axiosServices} from "./axios.services";
import {urls} from "../Urls";

const postServices ={
    getAll: (page,_limit=5)=>axiosServices.get(urls.posts,{params:{
        _start:(page-1)*_limit,
            _limit:_limit
        }}),
    getById: (id)=>axiosServices.get(`${urls.posts}/${id}`)
}
export {postServices};