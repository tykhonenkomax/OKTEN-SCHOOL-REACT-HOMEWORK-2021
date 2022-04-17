import React from 'react';

const SingleUserComponets = ({item}) => {



   const{id,title,body} =item;

    return (
        <div>
            <div> <strong>Id: {id} </strong></div>
            <div>title:{title}</div>
            <div>body:{body}</div>
            <hr/>
        </div>
    );
};

export {SingleUserComponets};