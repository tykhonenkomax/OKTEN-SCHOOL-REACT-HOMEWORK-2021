import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {postServices} from "../../Services";
import {PostComponent} from "../../Components";
import PostDetails from "../../Components/PostDetails/PostDetails";

const SinglePage = () => {
    const {state}=useLocation();
const [post,setPost]=useState(state)
    const {id}=useParams();


    useEffect(()=>{
        if (!state){
            postServices.getById(id).then(({data})=>setPost(data))
        }else {
            setPost(state)
        }

    },[id,state])

    return (
        <div>
            {
                post && <PostDetails item={post}/>
            }
        </div>
    );
};

export {SinglePage};