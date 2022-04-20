import React, {useEffect, useState} from 'react';
import {postServices} from "../../Services";
import {PostComponents} from "../PostComponents";
import {Outlet} from "react-router-dom";

const PostsPageComponents = () => {

   const[posts,setPosts]= useState([])

    useEffect(()=>{
        postServices.getAll().then(({data})=>setPosts(data.slice(0,5)))
    },[])

    return (
        <div>
        <div>
            {
                posts.map(post=><PostComponents key={post.id} itemPost={post}/>)
            }
        </div>
            <Outlet/>
        </div>
    );
};

export {PostsPageComponents};