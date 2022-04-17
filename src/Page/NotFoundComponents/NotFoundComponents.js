import React from 'react';
import css from './NotFoundComponents.module.css'

const NotFoundComponents = () => {
    return (
        <div className={css.father}>
        <div>
            <img className={css.error} src="https://www.pngkey.com/png/detail/212-2123376_erreur-404-png-error-404.png" alt="photo404"/>
        </div>
        </div>
    );
};

export {NotFoundComponents};