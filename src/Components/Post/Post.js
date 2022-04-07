import React from 'react';

const Post = ({item}) => {
    return (
        <div>
            {
                <div>
                    <p> {item.id} .) - {item.title}</p>
                    <p>{item.body}</p>
                </div>
            }
        </div>
    );
};

export default (Post)