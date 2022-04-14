import React from 'react';

const SinglePostComponents = ({item}) => {
    const{id,title,body}=item;
    return (
        <div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export {SinglePostComponents};

