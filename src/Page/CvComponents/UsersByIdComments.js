import React, {useEffect, useState} from 'react';
import {postsServices} from "../../Servivces";
import {CvComponents} from "./CvComponents";

const UsersByIdComments = () => {

    const[userComments,setUserComments]=useState([])
    useEffect(()=>{
        postsServices.getAllPosts().then(({data})=>setUserComments(data.slice(0,10)))
    },[])


    return (
        <div>
            {
                userComments.map(userComment=> <CvComponents key={userComment.id} item={userComment}/>)
            }
        </div>
    );
};

export {UsersByIdComments};