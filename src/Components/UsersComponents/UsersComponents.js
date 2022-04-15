import React from 'react';

const UsersComponents = ({item}) => {
    const{id,title,body}=item;
    return (
        <div>
            <div>{id}</div>
            <div>{title}</div>
            <div>{body}</div>
        </div>
    );
};

export {UsersComponents};