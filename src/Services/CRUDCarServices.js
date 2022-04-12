import {axiosServices} from "./AxiosServices";
import urls from "../Links/Urls";

const CRUDCarServices={
    getCars:()=>axiosServices.get(urls.cars),
    createCars:(car)=>axiosServices.post(urls.cars, car),
    deleteCarsById:(id)=>axiosServices.delete( `${urls.cars}/${id}`),
    getCarsById:(id)=>axiosServices.get(`${urls.cars}/${id}`),
    refreshObjectCars:(id)=>axiosServices.put(`${urls.cars}${id}`)

}
export {CRUDCarServices}