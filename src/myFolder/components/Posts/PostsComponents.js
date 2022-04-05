import {useEffect, useState} from "react";

function UserComponents() {

 let[post,setPosts]=useState([])

    useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(value => value.json())
                .then(value => {
                    value.length = 10;
                    setPosts(value)
                });
    },[])

    return(
        <div>
            {
                post.map(value => <p key={value.id}>{value.body}</p>)
            }
        </div>
    );
}
export default UserComponents;