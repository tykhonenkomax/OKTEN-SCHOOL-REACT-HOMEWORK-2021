import axiosServices from "./axios.services";
import {urls} from "../configs";


const carServices ={
    buildCars: (data)=>axiosServices.post(urls.cars,data).then(value => value.data),
    getAllCars: ()=>axiosServices.get(urls.cars).then(value => value.data),
    getById:(id)=>axiosServices.get(`${urls}/${id}`).then(value => value.data),
    changeCars:(id,data)=>axiosServices.patch(`${urls.cars}/${id}`, data).then(value => value.data),
    deleteCars:(id)=>axiosServices.delete(`${urls.cars}${id}`)
}
export default carServices;