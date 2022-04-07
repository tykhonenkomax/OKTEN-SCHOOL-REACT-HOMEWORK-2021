import React from 'react';

function User ({item, detailsUser}) {
    return (
        <div>
            {item.id}
            {item.name} -
            {item.username}
            <button className={'button'} onClick={() => detailsUser(item.id)}>Get Details</button>
        </div>
    );
};

export default User;