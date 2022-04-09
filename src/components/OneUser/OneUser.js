import React from 'react';


const OneUser = ({user, getUserId}) => {

    let {id, name} = user;



    return (
        <div>
            {id}- {name}
            <button onClick={()=>getUserId(id)}>Get Details</button>
        </div>
    );
};

export {OneUser};