import React, {useContext} from 'react';
import {MyContext} from "../../index";

const AboutPageComponents = () => {
    const value=useContext(MyContext);

    console.log(value);
    return (
        <div>
            AboutPageComponents
        </div>
    );
};

export {AboutPageComponents};