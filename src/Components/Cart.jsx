import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cartcard from './Cartcard';

const Cart = () => {
    const items = useLoaderData();
    return (
        <>
        <br /><br />
        <h1 className='text-center text-3xl'>CART</h1><br /><br /> 
        <div className='grid grid-cols-3 gap-20'>
            {
                items.map(item=> <Cartcard item={item}></Cartcard>)
            }
        </div></>
    );
};

export default Cart;