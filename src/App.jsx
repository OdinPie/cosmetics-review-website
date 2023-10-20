
import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom'
import './App.css'
import { AuthContext } from './Provider/AuthProvider';
import { useContext } from 'react';

function App() {
  const cartItem = useLoaderData();
  const itemnumber = cartItem.length;
  const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () =>{
      logOut()
      .then()
      .catch(error=>console.log(error.message))
      console.log("user logged out");
    }
  return (
    <>
    <nav>
    <div className="navbar bg-base-100 sticky" style={{position: 'sticky', top:0}}>
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
    </nav>
    <Outlet></Outlet>
    
    </>
  )
}

export default App
