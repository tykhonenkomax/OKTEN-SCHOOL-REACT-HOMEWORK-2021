import React from 'react';

const SinglePostComponents = ({item}) => {
    const{id,title,body}=item;
    return (
    <div>
          <div>

            <div><strong>Id:</strong>  {id}). <strong>Title: </strong>  {title} </div>
            <div>Body: {body}</div>
            <button>Get Users</button>

          </div>

    </div>
    );
};

export {SinglePostComponents};

