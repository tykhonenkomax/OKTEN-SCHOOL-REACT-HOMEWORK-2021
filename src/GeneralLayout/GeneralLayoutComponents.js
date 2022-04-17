import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import css from './GeneralLayoutComponents.module.css'

const GeneralLayoutComponents = () => {
    return (
        <div>
        <div className={css.header}>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/comments">Comments</NavLink>
        </div>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {GeneralLayoutComponents};