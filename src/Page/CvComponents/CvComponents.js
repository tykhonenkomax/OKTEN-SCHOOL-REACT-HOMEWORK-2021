import React from 'react';


const CvComponents = ({item}) => {
    const{id,title,body}=item;
    return (
        <div>
            {id}--{title}--{body}
        </div>
    );
};

export {CvComponents};