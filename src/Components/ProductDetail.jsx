import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {prodid} = useParams();
    const products = useLoaderData();
    const product = products.find(prod=> prod._id===prodid);
    const {brand, name, photoURL, price, rating, type, detail} = product;

    return (
        <div className='my-20'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={photoURL} alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>${price}</p>
                <p>{type}</p>
                <p>{detail}</p>
                <div className="card-actions justify-end">
                <button className="btn bg-red-100">Add to Cart</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ProductDetail;