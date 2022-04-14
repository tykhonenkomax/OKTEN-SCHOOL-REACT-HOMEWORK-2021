import React from 'react';
import {Link, Outlet} from "react-router-dom";
import css from './MainLayout.module.css'


const MainLayout = () => {
    return (
        <div>
        <div className={css.generalMainLayout}>
            <Link to={'/home'}>HOME</Link>
            <Link to={'/posts'}>POSTS</Link>
            <Link to={'/users'}>USERS</Link>
            <Link to={'/about'}>ABOUT</Link>
        </div>
            <hr className={css.line}/>
<Outlet/>
        </div>
    );
};

export {MainLayout};