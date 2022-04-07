import React, {useEffect, useState} from 'react';
import User from "../User/User";

const UsersComponents = () => {
    const [users, setUsers]= useState([])
    const [user, setUser]= useState(null)
    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
               setUsers([...value]);
            })
    },[])

    const detailsUser = (id)=>{
        let objDetails =users.find(value => value.id === id)
        setUser(objDetails)
    }

    return (
        <div className={'userPage'}>

        <div  className={'users'}>
            {
                users.map(value =><User
                    key={value.id}
                    item={value}
                    detailsUser={detailsUser}
                />)
            }
        </div>
            <div className={'userInformation'}>
                {
                 user && <h3>
                    <p> №. {user.id}</p>
                    <p>Name: {user.name}</p>
                    <p>Surname: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Street: {user.address.street}</p>
                    <p>Suite: {user.address.suite}</p>
                    <p>City: {user.address.city}</p>
                    <p>Zipcode: {user.address.zipcode}</p>
                    </h3>



                }

        </div>

        </div>
    );
};

export default UsersComponents;