import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {commentsServices} from "../../Servivces";
import {CvCommentsComponents} from "./CvCommentsComponents";
import {Outlet} from "react-router-dom";


const CvComponents = () => {
  const{id} = useParams()

const[comments,setComments]=useState(null)

    useEffect(()=>{
        commentsServices.getByIdComments(id).then(({data})=>setComments(data))
    },[])

    return (
        <div>
        <div>
            {
               comments && <CvCommentsComponents comments={comments}/>
            }
        </div>
            <Outlet/>
        </div>
    );
};

export {CvComponents};