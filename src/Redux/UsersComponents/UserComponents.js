import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

const UserComponents=()=> {

 const state=useSelector(state=>state)
   const dispatch= useDispatch();

 useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
         .then(value => value.json())
         .then(users=>{
             dispatch({type:'LOAD',payload:users})
         })
 })

    return (

        <div>
            {

            }
        </div>
    );
};

export {UserComponents};