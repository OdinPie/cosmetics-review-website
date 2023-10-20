import React from 'react';

const Cartcard = ({item}) => {
    const {name, price} = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Cartcard;