import React from 'react';
import Brands from './Brands';
import { Link, NavLink, useLoaderData } from 'react-router-dom';


const Banner = () => {
  const brands = useLoaderData();
  console.log(brands);
    return (
        <div>
            <div className="carousel w-full overflow-hidden">
  <div id="slide1" className="carousel-item relative w-full relative">
    
    <h2 className='absolute top-1/4 left-2/4 text-white font-extralight text-5xl text-right appear'>Check out products from your <br /><br /> Favourite Brand and get <br /><br /> Top-Notch Reviews</h2><br />
  <a href="#brands"><button className='absolute top-3/4 left-3/4 btn px-20 bg-base-100 text-rose-500  animate-pulse'>EXPLORE</button></a> 
   {/* navbarrrrr */}
   {/* {<nav style={{position: 'sticky', top:0, zIndex:20}}>
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <img className='w-14 h-16' src="https://i.ibb.co/4WRRhwk/pngwing-com.png" alt="girl" />
    <a className="btn btn-ghost normal-case text-xl">GLOSSYGURU</a>
  </div>
  <div className="flex">
    
      <ul className='flex gap-5'>
        <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-rose-400" : ""
          }
        >
        Home
        </NavLink>
        </li>
        <li>
        <NavLink
          to="/addproducts"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-rose-400" : ""
          }
        >
        Add Products
        </NavLink>
        </li>
      </ul>
    
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <Link to="/cart">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{itemnumber}</span>
          </Link>
        </div>
      </label>
    
    <div>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full mx-2">
          {
             user? <img src={user.photoURL} /> : " "
          }
        </div>
      </label>
      <label tabIndex={0} className="btn btn-ghost">
      <div className='mx-2 border-s-white border-2 rounded-lg p-1'>
         {
             user? <h3>{user.displayName}</h3> : " "
         } 
      </div>
</label>
{ user? <button onClick={handleLogOut} className='btn'>Logout</button>:
      <Link to="/login" className="btn">Login</Link>}
      
      
    </div>
  </div>
</div>
    </nav>} */}
    <img src="https://img.freepik.com/free-photo/view-frame-with-make-up-products-flowers_23-2148301830.jpg?w=996&t=st=1697744181~exp=1697744781~hmac=4c29faac2c21f382edd4341593c1f5f28dda9cee3e9559387cf4d0c1c5b30853" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <h2 className='absolute top-1/3 left-1/3 right-1/3 text-black font-extralight text-4xl text-center appear'><strong>Sign Up Now </strong><br /><br /> to be a premium client <br /> <br /><h4 className='text-lg'>Add Product, View Details and many more!</h4></h2><br />
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