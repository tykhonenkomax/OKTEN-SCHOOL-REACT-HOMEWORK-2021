import {axiosService} from "./AxiosServices";
import {jsonRequests} from "../JsoRequests";

let userServices ={
    getAll:()=>axiosService.get(jsonRequests.users),
    getId: (id)=>axiosService(`${jsonRequests.users}/${id}`)
}
export {userServices}