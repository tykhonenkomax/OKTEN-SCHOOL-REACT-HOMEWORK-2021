import React, {useEffect, useState} from 'react';
import {postServices} from "../../Services";
import {SingleUserComponets} from "../SingleUserComponets";

const UsersComponents = () => {


    const [users, setUsers]=useState([])

    useEffect(()=>{
        postServices.getAllUsers().then(({data})=>setUsers(data))
    },[])

    return (
<div>
    <div>
        {
            users.map(userById => <SingleUserComponets key={userById.id} item={userById}/> )
        }
    </div>
</div>
    );
};

export {UsersComponents};