import React, {useEffect, useState} from 'react';

const PostsComponents = () => {
   let [posts,setPosts]= useState([])

    useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {value.length=10;
    setPosts(value)
    });

    },[])


    return (
        <div>
            {
                posts.map(value =><PostsComponents key={value.id} items={value}/>)
            }
        </div>
    );
};

export default PostsComponents;