import React, {useEffect, useState} from 'react';


import {CRUDCarServices} from "../../Services";
import CarComponents from "../CarComponents/CarComponents";



const CarsComponents = () => {
   const[cars, setCars]= useState([])

    useEffect(()=>{
        CRUDCarServices.getCars().then(({data})=>setCars(data))

        },[])

    return (
        <div>
            {
                cars.map(car=><CarComponents key={car.id} item={car}/>)
            }
        </div>
    );
};

export default CarsComponents;