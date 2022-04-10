import {useEffect, useState} from "react";

import {linksUser} from "../services/UserServices";



const UsersComponents = () => {

    let {users, setUsers} = useState([]);

useEffect(()=>{

    linksUser.getByUsers().then(value => value.data).then(value => setUsers(value))

},[])


    return (
        <div>
            {

            }
        </div>
    );
};

export {UsersComponents};