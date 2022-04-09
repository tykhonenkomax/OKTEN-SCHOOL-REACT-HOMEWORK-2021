import React, {useEffect, useState} from 'react';


import {userService} from "../../serrvices";
import {OneUser} from "../OneUser/OneUser";

const UsersComponents = () => {

    let[users,setUsers]= useState([])
    let[user,setUser]= useState(null)

    useEffect(()=>{
        userService.getAll().then(({data})=>setUsers(data))
    },[])

 const getUserId = async (id)=>{
        const {data} =await userService.getId(id)
     setUser(data)
 }



    return (
        <div>
        <div>
            {
                users.map(user =><OneUser key={user.id} user={user} getUserInfo={getUserId}/> )
            }
        </div>

           <div>
               {
               user && <div>{user.id} {user.name} {user.surname} {user.email}</div>
               }
           </div>

        </div>
    );
};

export {UsersComponents};