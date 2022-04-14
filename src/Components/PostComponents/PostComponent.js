import React from 'react';

import {ButtonComponents} from "../Button";

const PostComponent = ({item}) => {
    let{id, title}=item;
    return (
        <div>
            {id}--{title} <ButtonComponents to={id.toString()} state={item}>Ger Ditailds</ButtonComponents>
        </div>
    );
};

export {PostComponent};