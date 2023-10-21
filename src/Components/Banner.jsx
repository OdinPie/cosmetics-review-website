import React from 'react';
import Brands from './Brands';
import { Link, useLoaderData } from 'react-router-dom';

const Banner = () => {
  const brands = useLoaderData();
  console.log(brands);
    return (
        <div>
            <div className="carousel w-full overflow-hidden">
  <div id="slide1" className="carousel-item relative w-full">
    
    <h2 className='absolute top-1/4 left-2/4 text-white font-extralight text-5xl text-right'>Check out products from your <br /><br /> Favourite Brand and get <br /><br /> Top-Notch Reviews</h2><br />
  <a href="#brands"><button className='absolute top-3/4 left-3/4 btn px-20 bg-transparent text-rose-500'>EXPLORE</button></a> 
   
  
    <img src="https://img.freepik.com/free-photo/view-frame-with-make-up-products-flowers_23-2148301830.jpg?w=996&t=st=1697744181~exp=1697744781~hmac=4c29faac2c21f382edd4341593c1f5f28dda9cee3e9559387cf4d0c1c5b30853" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <h2 className='absolute top-1/3 left-1/3 right-1/3 text-black font-extralight text-4xl text-center'><strong>Sign Up Now </strong><br /><br /> to be a premium client <br /> <br /><h4 className='text-lg'>Add Product, View Details and many more!</h4></h2><br />
  <Link to="/register">
      <button className='absolute bottom-1/3 left-1/3 right-1/3 btn px-20 bg-transparent border-black text-rose-500'>SIGN UP</button>
  </Link>
    <img src="https://img.freepik.com/free-photo/top-view-different-beauty-products-composition_23-2148574459.jpg?w=996&t=st=1697744346~exp=1697744946~hmac=0718789e32698a54a36fd48bcb0d883ecef27c3b1f04cf9122b3536ee1110df6" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
</div>
      <div id='brands' className='text-center my-10'>
            <h2 className='font-poppins font-thin text-4xl'>Brands</h2><br />
            <p>Choose a brand to see the affiliated products</p><br /><br />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
              {
              brands && brands.map(brand => <Brands brand={brand}></Brands>)
            }
            </div>
            
        </div>
        </div>
    );
};

export default Banner;