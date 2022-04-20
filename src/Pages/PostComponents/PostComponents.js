import React from 'react';
import {Link} from "react-router-dom";


const PostComponents = ({itemPost}) => {
    const {id,title,body}=itemPost;
    return (
        <div>
            <div>
                <div>ID: {id}</div>
                <div>TITLE: {title}</div>
                <div>BODY: {body}</div>
                <div><Link to={id.toString()}>Get Details</Link></div>
            </div>
            <hr/>
        </div>
    );
};

export {PostComponents};