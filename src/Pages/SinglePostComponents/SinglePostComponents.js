
import {useLocation, useParams} from "react-router-dom";

import {GetDetails} from "../GetDetails";
import {postServices} from "../../Services";
import {useEffect, useState} from "react";

const SinglePostComponents = () => {
    const {state}= useLocation()
const[post,setPost]=useState(state)
    const {id}= useParams();

   useEffect(()=>{
       if (!state){
           postServices.getById(id).then(({data})=>setPost(data))
       }else {
           setPost(state)
       }

   },[id])
    return (
        <div>
            {
                post && <GetDetails post={post}/>
            }
        </div>
    );
};

export {SinglePostComponents}