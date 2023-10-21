import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Product from './Product';

const Brand = () => {
    const {id} = useParams();
    const brands = useLoaderData();
    const brand = brands.find(brand => brand.id==id);
    const {brand_name, img1, img2, img3} = brand;
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://cosmetics-server.vercel.app/products')
        .then(res=> res.json())
        .then(data=>{
            const brandproductarray=[];
            data.map(prod=> {

                if(prod.brand===brand_name){
                    brandproductarray.push(prod);
                    const prodlist= [...brandproductarray,prod];
                    setProducts(prodlist)
                }
            })
        })
    },[])
    console.log(products);
    return (
        <div className=' max-w-7xl mx-auto'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-extralight'>{brand_name}</h1><br /><br />
            <div className="carousel w-3/4 h-[500px]  rounded-xl">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> 
            </div>
            <br /><br />
            <h1 className='text-4xl font-extralight'>Check Out the Products</h1><br /><br />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
               {
                products && products.map(product=> <Product product={product}></Product>)  
                } 
                
            </div>
                {
                    products.length===0 && <h2 className='text-2xl text-center'>Sorry <br />No products Available right now</h2>
                } 
            </div>
            

        </div>
    );
};

export default Brand;