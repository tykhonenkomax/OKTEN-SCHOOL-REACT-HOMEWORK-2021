import React from 'react';
import {useForm} from "react-hook-form";

const FormComponents = () => {

    const {register,handleSubmit,reset}=useForm();

    const infoFromInput =(value)=>{
        console.log(value)
    }

    
    return (
        <div>
            <form onSubmit={handleSubmit(infoFromInput)}>
                <div><label>Model: <input type='text' {...register('model')}/></label></div>
                <div><label>Price: <input type='text' {...register('price', {valueAsNumber:true})}/></label></div>
                <div><label>Year: <input type='text'{...register('year',{valueAsNumber:true} )}/></label></div>
                <button>PUSH MY TRA LA LA</button>
            </form>
        </div>
    );
};

export default FormComponents;