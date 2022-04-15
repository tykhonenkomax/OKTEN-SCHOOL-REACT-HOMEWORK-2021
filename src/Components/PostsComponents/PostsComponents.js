import React, {useEffect, useState} from 'react';
import {postServices} from "../../Services";
import {SinglePostComponents} from "../SinglePostComponent";
import {UsersComponents} from "../UsersComponents";


const PostsComponents = () => {

    const [posts, setPosts]=useState([])
    const [users, setUsers]=useState([])

    useEffect(()=>{
        postServices.getAll().then(({data})=>setPosts(data))
    },[])

    useEffect(()=>{
        postServices.getByIdUsers().then(({data})=>setUsers(data))
    },[])

    return (
        <div>
        <div>
            {
                posts.map(singlePost => <SinglePostComponents key={singlePost.id} item={singlePost}/> )
            }
        </div>
    <div>
        {
            users.map(userById => <UsersComponents key={userById.id} item={userById}/> )
        }
    </div>
        </div>
    );
};

export {PostsComponents};