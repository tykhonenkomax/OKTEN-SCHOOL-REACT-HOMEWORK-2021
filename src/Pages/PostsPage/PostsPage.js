import React, {useEffect, useState} from 'react';
import {postServices} from "../../Services";
import {PostComponent} from "../../Components";
import {Outlet} from "react-router-dom";

const PostsPage = () => {
    const[posts,setPosts]=useState([])


    useEffect(()=>{
        postServices.getAll().then(({data})=>setPosts(data))
    },[])

    return (
        <div style={{display:'flex'}}>

                <div>
                    {
                        posts.map(post => <PostComponent key={post.id} item={post}/>)
                    }
                </div>
                <div><Outlet/></div>

        </div>
    );
};

export {PostsPage};