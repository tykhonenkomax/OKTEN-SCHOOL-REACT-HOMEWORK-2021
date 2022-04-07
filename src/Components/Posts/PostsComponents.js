import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";

const PostsComponents = ({posts}) => {

    return (
        <div>
            {
                posts.map(value =><Post key={value.id} item={value}/>)
            }
        </div>
    );
};

export default PostsComponents;