import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider";
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
const Login = () => {
    const {signIn,googleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);
    const handleLogin = (e) =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        signIn(email,password)
        .then(result=>{
            console.log(result);
            Swal.fire(
                'Good job!',
                'You have succesfully logged in!!',
                'success'
              )
              navigate(location?.state ? location.state : '/');
        })
        .catch(error=>{
            const message = error.message;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: message,
              })
        })
    }
    const handleGoogleLogIn = e =>{
        e.preventDefault();
        googleSignIn()
        .then(result=>{
            console.log(result.user);
            Swal.fire(
                'Good job!',
                'You have succesfully logged in!!',
                'success'
              )
              navigate(location?.state ? location.state : '/');

        })
    }
    
    return (
        <div className='text-center'> 
    <h1 className='text-3xl font-bold my-5 text-white'>Please Login</h1>

    <div className="card flex-shrink-0 w-1/2 mx-auto max-w-sm shadow-2xl bg-base-100">
  <form onSubmit={handleLogin} className="card-body bg-pink-700 bg-opacity-50 rounded-lg">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name='email' placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name='password' placeholder="password" className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn">Login</button><br />
      <button onClick={handleGoogleLogIn} className="btn btn-secondary"><FaGoogle></FaGoogle>Login with Google</button>
    </div>
  <p>Don't have an accout? <Link to="/register" className='underline'>Register</Link> </p>

  </form>
    </div>
  <br /><br />
  <br /><br />
    </div>
    );
};

export default Login;