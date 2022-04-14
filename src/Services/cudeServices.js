import {axiosServices} from "./AxiosServices";
import urls, {links} from "../Urls/Urls";

const postServices={
    getAll:()=>axiosServices.get(links.posts),
        getById:(id)=>axiosServices.get(`${links.posts}/${id}`)
}
export {postServices}