import {useEffect, useState} from "react";

function UseComponents() {

        let[post,setPosts]=useState([])

        useEffect(()=>{


                fetch('https://jsonplaceholder.typicode.com/users')
                    .then(value => value.json())
                    .then(value => {setPosts(value)});
        },[])

    return(
        <div>
            {
                post.map(value => <p key={value.id}>
                    <strong> {value.id} </strong>
                    {`Name: ${value.name}
                    Surname: ${value.username}
                    Street: ${value.address.street} 
                    City:${value.address.city}`}
                    <hr/>

                </p>)
            }
        </div>
    );
}
export default UseComponents;