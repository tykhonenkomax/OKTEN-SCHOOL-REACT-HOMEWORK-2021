import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {CRUDCarServices} from "../../Services";

const FormComponents = () => {

    const [errorResponce, setErrorResponce] = useState({})

    const {
        register, handleSubmit, watch, formState: {errors}
    } = useForm();

    const infoFromInput = async (car) => {
        try {
            const newCar = await CRUDCarServices.createCars(car)
            console.log(newCar)


        } catch (error){
        setErrorResponce(error.response.data)
    }
}


    
    return (
        <div>
            <form onSubmit={handleSubmit(infoFromInput)}>
                <div><label>Model: <input type='text' {...register('model')}/></label></div>
                {errorResponce.model && <span>{errorResponce.model[0]}</span>}
                <div><label>Price: <input type='text' {...register('price', {valueAsNumber:true})}/></label></div>
                {errorResponce.price && <span>{errorResponce.price[0]}</span>}
                <div><label>Year: <input type='text'{...register('year',{valueAsNumber:true} )}/></label></div>
                {errorResponce.year && <span>{errorResponce.year[0]}</span>}
                <button>PUSH MY TRA LA LA</button>
            </form>
        </div>
    )
};

export default FormComponents;