import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'
import { AuthContext } from "../Provider/AuthProvider";
const Register = () => {
    const {createUser, updateUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const displayName = form.get('displayName');
        const photoURL = form.get('photoURL');
        const password = form.get('password');
        
        if (password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password is too Short!',
              })
          } else if (!/[A-Z]/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must contain at least one uppercase letter.',
              })
          } else if (!/[!@#$%^&*()_+\-=\[\]{};':".,<>\/?]/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must contain at least one special character.',
              })
          } else {
            createUser(email,password)
            .then(result=>{ 
              updateUser(displayName, photoURL);
                Swal.fire(
                    'Good job!',
                    'You have succesfully created an account!!',
                    'success'
                  )
                console.log(result.user);

                    let timerInterval
                    Swal.fire({
                    title: `Please Wait, ${displayName}`,
                    html: 'Relocating you to Login Page',
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft()
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                    }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log('I was closed by the timer')
                    }
                    })

                navigate('/login');
            })
            .catch(error =>{
                console.log(error.message);
            })
          }
       
    }
    return (
        <div>
            <div className='text-center '>
       <h1 className='text-3xl font-bold my-5 text-white'>Please Register</h1>
        <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100  w-1/2 mx-auto">
      <form onSubmit={handleRegister} className="card-body bg-purple-700 bg-opacity-50 rounded-lg">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" name='displayName' placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered" required />
        </div>
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
          <button className="btn btn-primary">Register</button>
        </div>
      <p>Already have an Account? <Link to="/login" className='underline'>Login</Link> </p>

      </form>
        </div>
       </div>
        </div>
    );
};

export default Register;