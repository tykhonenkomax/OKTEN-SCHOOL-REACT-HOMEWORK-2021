import React from 'react';

const Post = ({item}) => {
    return (
        <div>
            {
                <h3>
               <p>{item.userId}</p>
                <p>  {item.id}</p>
                <p>{item.title}</p>
                <p>{item.body} </p>
                </h3>
            }



        </div>
    );
};

export default Post;