import React from 'react';

import css from './AboutComponents.module.css'
import {Link} from "react-router-dom";

const AboutComponents = () => {
    return (
        <div>
        <div className={css.welcomeFather}>

            <div className={css.textAbout}>
                <h2 className={css.welcome}>Welcome to Seoul</h2>
                <h5 className={css.welcome2}>서울에 오신 것을 환영합니다</h5>
                <h5 className={css.welcome3}>5 locations°4 days × 27 hours</h5>
                <p className={css.welcome4} >of searching for harmony in people and surroundings. This is my first visit to Korea, but I fell in
                    love with this country and people even before my arrival. This is definitely one of the most
                    beautiful places I have been to.</p>
            </div>


            <div>
                <img className={css.photoAbout}
                     src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/b10dac74583829.5c3491d44eee9.jpg"
                     alt="photo"/>

            </div>
            <hr/>
        </div>
            <hr/>
            <div className={css.Father2}>
            <div>
                <img className={css.photoAbout2} src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/88559074583829.5c3491d4518d6.jpg" alt="photo2"/>
            </div>
            <div className={css.info1}>
               <p>Seoul. South Korea</p>
                <p>서울특별시 ​​​​​​​</p>
                <p>37°33'10.7"N 126°59'27.2"E</p>
                <p>07.11.2018</p>
                <div className={css.Father3}>

                        <Link to="https://www.instagram.com/accounts/login/?next=/yurapodryadov.design/">Instagram</Link>
                        <Link to="/https://www.facebook.com/yurapodryadov">Facebook</Link>

                </div>

            </div>
            </div>
        </div>
    );
};

export {AboutComponents};