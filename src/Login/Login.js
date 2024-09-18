import React, { useEffect } from 'react';
import { Link,useNavigate,useLocation } from 'react-router-dom';
import { useSignInWithGoogle,useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loddingbtn from './Loddingbtn';
import useToken from '../hooks/useToken';

const Login = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const [token,userLodding] = useToken(user ||guser)

    
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const hendelLogin=(event) =>{
      event.preventDefault();
      const email= event.target.email.value;
      const password = event.target.password.value;
      signInWithEmailAndPassword(email, password)

    }
     useEffect(()=>{
      if (token) {
        navigate(from,{replace:true});
      }
     },[token,from,navigate])
     
     
    if (loading ||gloading||userLodding) {
        return <Loddingbtn></Loddingbtn> ;
      }
      
   
     


      
      


    return (
        <div>
         <div className="hero-content flex-col ">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
     <h1 className='text-center text-primary text-xl font-bold capitalize'>login</h1>
      <form onSubmit={hendelLogin} className="card-body py-0">
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
        <div className="form-control ">
          <button className="btn btn-primary uppercase ">Login</button>
        </div>
        
        <p className='text-center'><small>New to Doctors Portal?<Link className='text-primary' to="/singup">Create new account</Link></small></p>
      </form>
      <div className="divider mx-6">OR</div>
      <button onClick={() => signInWithGoogle()} className="btn btn-outline m-6 hover:bg-primary">CONTINUE WITH GOOGLE</button>
    </div>
  </div>
</div>
    );
};

export default Login;