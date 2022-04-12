import React from 'react';

const CarComponents = ({car}) => {

    const{id,model,price,year}=car;

    return (
        <div>
            <p>id: {id}</p>
            <p>Model: {model}</p>
            <p>Price: {price}</p>
            <p>Year: {year}</p>
           <hr/>
        </div>
    );
};

export {CarComponents};