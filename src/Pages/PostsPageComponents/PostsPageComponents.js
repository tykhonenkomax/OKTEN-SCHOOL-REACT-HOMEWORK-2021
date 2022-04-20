import React, {useContext, useEffect, useState} from 'react';
import {postServices} from "../../Services";
import {PostComponents} from "../PostComponents";
import {Outlet} from "react-router-dom";
import {MyContext} from "../../index";

const PostsPageComponents = () => {

   const[posts,setPosts]= useState([])

    const value = useContext(MyContext)


    useEffect(()=>{
        console.log(value)
        value.name='OLGA'
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