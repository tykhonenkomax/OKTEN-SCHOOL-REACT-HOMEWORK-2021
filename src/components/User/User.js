import React from 'react';


const User = ({item,userDitails}) => {
    return (
        <div>
          <p className={'peshka'}> {item.id}  {item.name}</p>
            <button onClick={()=> userDitails(item.id)}>PUSH ME</button>
        </div>
    );
};

export default User;