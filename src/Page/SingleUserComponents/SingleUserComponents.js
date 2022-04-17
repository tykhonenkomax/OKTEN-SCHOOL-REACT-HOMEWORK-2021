import React from 'react';
import css from './SingleUserComponents.module.css'


const SingleUserComponents = ({userItem}) => {
    const{id,name,username,email,phone,website}=userItem;

    return (
        <div>
            <div>
            <div className={css.photoGeneral}>
                <h4>Worker №: {id}</h4>
                <img className={css.photo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxcKPt6W9hJR0nT7hBdbikq-dr40vLR0DfmFHg2ezsVkxru7TXb09Di5lG4faz5cxmZ3k&usqp=CAU" alt=""/>
                <button className={css.button1}>Read CV</button>
            </div>
           
            <hr/>
            <h5>My Name: {name} My Username: {username} </h5>
            <p>Email: {email}</p>
            <p>My phone number: {phone}</p>
            <p>Website: {website}</p>
            </div>
            <hr/>
        </div>
    );
};

export {SingleUserComponents};