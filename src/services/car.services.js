import axiosServices from "./axios.services";
import {urls} from "../configs";


const carServices ={
    buildCars: ()=>axiosServices.post(urls.cars).then(value => value.data),
    getAllCars: ()=>axiosServices.get(urls.cars).then(value => value.data),
    getById:(id)=>axiosServices.get(`${urls}/${id}`).then(value => value.data),
    changeCars:(id)=>axiosServices.patch(`${urls.cars}/${id}`).then(value => value.data),
    deleteCars:(id)=>axiosServices.delete(`${urls.cars}${id}`)
}
export default carServices;