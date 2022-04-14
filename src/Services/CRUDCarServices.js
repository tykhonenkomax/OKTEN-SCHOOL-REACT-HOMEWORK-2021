import {axiosServices} from "./AxiosServices";
import {links} from "../Links";


const CRUDCarServices={
    getCars:()=>axiosServices.get(links.cars),
    createCars:(car)=>axiosServices.post(links.cars, car),
    deleteCarsById:(id)=>axiosServices.delete( `${links.cars}/${id}`),
    getCarsById:(id)=>axiosServices.get(`${links.cars}/${id}`),
    refreshObjectCars:(id, car)=>axiosServices.put(`${links.cars}${id}`, car)

}
export {CRUDCarServices}