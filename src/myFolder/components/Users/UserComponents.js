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
                post.map(value => <p key={value.id}> {value.id} {value.name} {value.username} </p>)

            }

        </div>
    );
}
export default UseComponents;