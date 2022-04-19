import React, {useEffect, useState} from 'react';
import {postsServices, usersServices} from "../../Servivces";
import {Outlet} from "react-router-dom";
import {SinglePostComponents} from "../SinglePostComponents";

const PostsComponents = () => {

 const[posts,setPosts ]= useState([])

    useEffect(()=>{
        postsServices.getAllPosts().then(({data})=>setPosts(data.slice(0,10)))

    },[])
    console.log(posts)

    return (

        <div>
            <div>
            {
                posts.map(post=><SinglePostComponents key={post.id} itemPost={post}/>)
            }
            </div>
            <Outlet/>
        </div>
    );
};

export {PostsComponents};