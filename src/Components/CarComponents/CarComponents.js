import React from 'react';

const CarComponents = ({item}) => {
    const {id,model,price,year}=item;
    return (
        <div>
            <p>Id: {id}</p>
            <p>Model: {model}</p>
            <p>Price: {price}</p>
            <p>Year: {year}</p>
        </div>
    );
};

export default CarComponents;