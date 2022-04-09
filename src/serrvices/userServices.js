import {axiosServices} from "./axiosServices";
import {links} from "../links";


const userService ={
    getAll:()=>axiosServices.get(links.users),
    getId:(id)=>axiosServices(`${links.users}/${id}`)
}
export {userService}