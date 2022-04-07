import React from 'react';

function User ({item, detailsUser}) {
    return (
        <div className={'information'}>
            {item.id}.)
            {item.name} -
            <button className={'button'} onClick={() => detailsUser(item.id)}>Get Details</button>
        </div>
    );
}

export default User;