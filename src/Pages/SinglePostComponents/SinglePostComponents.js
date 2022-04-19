import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postServices} from "../../Services";
import {GetDetails} from "../GetDetails";

const SinglePostComponents = () => {
const[post,setPost]=useState(null)
   const {id}= useParams();
   useEffect(()=>{
       postServices.getById(id).then(({data})=>setPost(data))
   },[id])
    return (
        <div>
            {
                post && <GetDetails post={post}/>
            }
        </div>
    );
};

export {SinglePostComponents};