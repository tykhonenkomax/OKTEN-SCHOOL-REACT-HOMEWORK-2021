import React from 'react';


const OneUser = ({user}) => {

    let {id, name} = user;

    return (
        <div>
                {id} -- {name}
        </div>
    );
};

export {OneUser};