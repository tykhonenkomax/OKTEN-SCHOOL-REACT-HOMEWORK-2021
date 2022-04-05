import {useEffect, useState} from "react";

function CommentComponents() {
    let[comment,setComments]=useState([])

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                value.length=10;
                setComments(value)
            });

    },[])

    return(
        <div>
            {
                comment.map(value => <p key={value.id}>
                    <strong> {value.id} </strong>
                    {value.name}: - {value.body}</p>)
            }
        </div>
    );
}
export default CommentComponents;


