import React from 'react';


const CvComponents = ({item}) => {
    const{id,title,body}=item;
    return (
        <div>
        <div>
            {id}--{title}--{body}
        </div>

        </div>
    );
};

export {CvComponents};