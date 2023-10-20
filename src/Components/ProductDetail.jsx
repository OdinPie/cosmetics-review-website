import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
const ProductDetail = () => {
    const {prodid} = useParams();
    const products = useLoaderData();
    const product = products.find(prod=> prod._id===prodid);
    const {brand, name, photoURL, price, rating, type, detail,_id} = product;
    const handleCart = () =>{
        
        const item = {name, price};
        fetch('https://cosmetics-server-aj9uuoanz-odinpies-projects.vercel.app/cart',{
            method: "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(item)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged==true){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Product has been added to cart',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  window.location.reload(false);
            }
           
        })
    }
    return (
        <div className='my-16'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={photoURL} alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>${price}</p>
                <p>{type}</p>
                <p>{detail}</p>
                <div className="card-actions justify-end">
                <button onClick={handleCart} className="btn bg-red-100">Add to Cart</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ProductDetail;