import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import carServices from "../../services/car.services";
import {joiResolver} from "@hookform/resolvers/joi";
import {CarValidators} from "../../validators";


const FormsComponents = () => {

   const[formError, setFormError] = useState({})


   const {
       register, handleSubmit, watch,formState:{errors},
   }= useForm({resolver:joiResolver(CarValidators), mode: "onTouched"});


const submit=(data)=>{
    carServices.buildCars(data).then(value => console.log(value)).catch(error=>{
        setFormError(error.response.data)})

}


    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
            <div><label>Model:<input type='text' defaultValue={''} {...register('model')}/></label></div>
                {/*{formError.model && <span>{formError.model[0]}</span>}*/}
                {errors.model && <span>{errors.model.message}</span>}
            <div><label>Price:<input type='text' defaultValue={''} {...register('price')}/></label></div>
                {/*{formError.price && <span>{formError.price[0]}</span>}*/}
                {errors.price && <span>{errors.price.message}</span>}
                <div> <label>Year<input type='text' defaultValue={''}{...register('year')}/></label></div>
                {/*{formError.year && <span>{formError.year[0]}</span>}*/}
                {errors.year && <span>{errors.year.message}</span>}
                <button>Save</button>
            </form>

        </div>
    );
};

export {FormsComponents};