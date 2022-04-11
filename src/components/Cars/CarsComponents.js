import React, {useEffect, useState} from 'react';
import carServices from "../../services/car.services";
import {CarComponents} from "../Car";


const CarsComponents = () => {

    const[cars,setCars] = useState([])

    useEffect(()=>{
        carServices.getAllCars().then(value => setCars([...value]) )

    },[])

    return (
        <div>
            {
                cars.map(car=><CarComponents key={car.id} car={car}/>)
            }
        </div>
    );
};

export {CarsComponents};