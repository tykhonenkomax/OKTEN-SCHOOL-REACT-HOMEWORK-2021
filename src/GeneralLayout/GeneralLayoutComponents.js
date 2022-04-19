import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import css from './GeneralLayoutComponents.module.css'

const GeneralLayoutComponents = () => {
    return (
        <div>
            <div className={css.wallpaper}>
            <img className={css.photoWallpaper} src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/88559074583829.5c3491d4518d6.jpg" alt="photo1"/>
            <img className={css.photoWallpaper} src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/b61a9574583829.5c3491d45125e.jpg" alt="photo2"/>
            <img className={css.photoWallpaper} src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/1d15a574583829.5c3491d451b2e.jpg" alt="photo3"/>
            <img className={css.photoWallpaper} src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/51ba2574583829.5c3491d450fde.jpg" alt="photo4"/>
            <img className={css.photoWallpaper} src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/6358e974583829.5c3491d44fa64.jpg" alt="photo5"/>
            <img className={css.photoWallpaper} src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/df4bc174583829.5c3491d450251.jpg" alt="photo6"/>
            </div>
        <div className={css.header}>

            <div>
                <img className={css.logo} src="https://www.nicepng.com/png/full/246-2469800_kanji-love-red-clip-art-love-kanji-red.png" alt=""/>
            </div>
<div>
            <NavLink to="/about">| About |</NavLink>
            <NavLink to="/company_staff">Company staff</NavLink>
            <NavLink to="/posts">| Posts |</NavLink>
            <NavLink to="/comments">Comments |</NavLink>
</div>
        </div>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {GeneralLayoutComponents};