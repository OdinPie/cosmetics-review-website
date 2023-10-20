import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Brand = () => {
    const {id} = useParams();
    const brands = useLoaderData();
    const brand = brands.find(brand => brand.id==id);
    const {brand_name, img1, img2, img3} = brand;
    
    return (
        <div className=' max-w-7xl mx-auto'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-4xl'>{brand_name}</h1><br /><br />
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
            </div>
            
        </div>
    );
};

export default Brand;