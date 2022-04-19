import React from 'react';

const GetDetails = ({post}) => {
    const {id,userId,title,body}=post;
    return (
        <div>
            <div>
            <div>Id: {id}</div>
            <div>UserId: {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
            </div>
            <hr/>

        </div>
    );
};

export {GetDetails};