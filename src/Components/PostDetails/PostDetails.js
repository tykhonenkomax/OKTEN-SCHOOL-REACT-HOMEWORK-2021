import React from 'react';

const PostDetails = ({item}) => {
    const{id,userId,title,body}=item;
    return (
        <div>
            <div>id:{id}</div>
            <div>UserId:{userId}</div>
            <div>Title:{title}</div>
            <div>Body:{body}</div>
        </div>
    );
};

export default PostDetails;