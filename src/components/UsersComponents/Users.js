import React, {useEffect, useState} from 'react';
import User from "../User/User";


const Users = () => {

 const[user,setUser]=useState([])
 const[Ditails ,setDitails]=useState([])

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(value => value.json())
          .then(value => setUser([...value]))
    },[])

    let userDitails = (id)=>{
        let objDitails = user.find(value => value.id === id)
        setDitails(objDitails)

    }

    return (
        <div>

        <div>
            {
              user.map(value => <User key={value.id} item={value} userDitails={userDitails}/>)
            }

        </div>

    <div className={'userInformation'}>
        {
            Ditails && <h3 className={'h3'}>
                <p> №. {Ditails.id}</p>
                <p>Name: {Ditails.name}</p>
                <p>Surname: {Ditails.username}</p>
                <p>Email: {Ditails.email}</p>
                <p>Street: {Ditails.address.street}</p>
                <p>Suite: {Ditails.address.suite}</p>
                <p>City: {Ditails.address.city}</p>
                <p>Zipcode: {Ditails.address.zipcode}</p>

            </h3>
        }
    </div>

        </div>
    );
};

export default Users;