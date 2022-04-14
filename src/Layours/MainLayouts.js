import React from 'react';

import css from './MainLayout.module.css';
import {Outlet, Link} from 'react-router-dom';

const MainLayouts = () => {

    return (
        <div>

            <div className={css.header}>
            <Link to="/home">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/about">About</Link>

            </div>
        <hr/>
            <Outlet/>
        </div>

    );
};

export {MainLayouts};