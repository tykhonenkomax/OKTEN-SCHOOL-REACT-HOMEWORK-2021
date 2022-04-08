import axios from "axios";
import {requestUserPostComment} from "../requests";

const userService ={
    getAll: ()=>axios.get(requestUserPostComment.users),
    getById: (id)=>axios.get(`${requestUserPostComment.users}/${id}`)
}
export default userService;


