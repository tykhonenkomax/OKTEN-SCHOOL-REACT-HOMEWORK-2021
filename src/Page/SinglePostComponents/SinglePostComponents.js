import React from 'react';

const SinglePostComponents = ({itemPost}) => {
    const{id, title, body}=itemPost;
    return (
        <div>
            <div>
            <div>№: {id}</div>
            <div>About: {title}</div>
            <div>Information: {body}</div>
            </div>
<hr/>
        </div>
    );
};

export {SinglePostComponents};