import React from 'react';

const SingleUser = ({user}) => {

    let {id, name, email} = user;



    return (
        <div>
            {id}- {name} --{email}

        </div>
    );
};
export default SingleUser;