import React from 'react';

import {NavLink} from "react-router-dom";
import css from './MainLayoutComponents.module.css'
import {Outlet} from "react-router-dom";

const MainLayoutComponents = () => {
    return (
        <div>
        <div className={css.navBar}>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
            <NavLink to='/about'>About</NavLink>
        </div>
         <Outlet/>
        </div>
    );
};

export {MainLayoutComponents};