import React from 'react';

import css from './MainLayout.module.css';
import {Outlet, Link, useNavigate} from 'react-router-dom';

const MainLayouts = () => {
    const navigate =useNavigate()

    return (
        <div>

            <div className={css.header}>
            <Link to="/home">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/about">About</Link>

            </div>
        <hr/>
            <div>
                <button onClick={()=>navigate(-1)}>prev</button>
                <button onClick={()=>navigate(1)}>next</button>
            </div>
            <Outlet/>
        </div>

    );
};

export {MainLayouts};