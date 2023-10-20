import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cartcard from './Cartcard';

const Cart = () => {
    const items = useLoaderData();
    return (
        <div>
            {
                items.map(item=> <Cartcard item={item}></Cartcard>)
            }
        </div>
    );
};

export default Cart;