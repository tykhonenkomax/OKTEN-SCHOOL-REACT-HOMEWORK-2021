import React from 'react';

const UserComponents = ({item}) => {
    return (
        <div>
            {item.id} -- {item.name} -- {item.username}

        </div>
    );
};

export default UserComponents;