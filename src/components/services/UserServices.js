
import {links} from "../links/links";
import {axiosServices} from "./axiosServices";

let linksUser = {

    getByUsers: ()=>axiosServices.get(links.users),
    getId: (id)=>axiosServices(`${links.users}/${id}`)

}
export {linksUser};