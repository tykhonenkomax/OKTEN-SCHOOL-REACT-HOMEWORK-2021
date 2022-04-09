import React, {useEffect, useState} from 'react';


import {userService} from "../../serrvices";
import {OneUser} from "../OneUser/OneUser";

const UsersComponents = () => {

    let[users,setUsers]= useState([])

    useEffect(()=>{
        userService.getAll().then(({data})=>setUsers(data))
    },[])


    return (
        <div>
            {
                users.map(user =><OneUser key={user.id} user={user}/> )
            }
        </div>
    );
};

export {UsersComponents};