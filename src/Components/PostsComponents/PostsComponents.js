import React, {useEffect, useState} from 'react';
import {postServices} from "../../Services";
import {SinglePostComponents} from "../SinglePostComponent";



const PostsComponents = () => {

    const [posts, setPosts]=useState([])



    useEffect(()=>{
        postServices.getAll().then(({data})=>setPosts(data))
    },[])


    return (
<div>
        <div>
            {
                posts.map(singlePost => <SinglePostComponents key={singlePost.id} item={singlePost}/> )
            }
        </div>


</div>


    );
};

export {PostsComponents};