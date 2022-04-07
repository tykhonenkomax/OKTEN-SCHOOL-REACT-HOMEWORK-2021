import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";

const PostsComponents = () => {
   let [posts,setPosts]= useState([])

    useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {value.length=10;
    setPosts([...value])
    });

    },[])



    return (
        <div>
            {
                posts.map(value =><Post key={value.id} item={value}/>)
            }
        </div>
    );
};

export default PostsComponents;