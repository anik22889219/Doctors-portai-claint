import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useSignInWithGoogle,useCreateUserWithEmailAndPassword,useUpdateProfile,useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loddingbtn from './Loddingbtn';

const Singup = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [updateProfile, updating, uerror] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, Verror] = useSendEmailVerification(
        auth
      );
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate()
     
    if (loading ||gloading) {
        return <Loddingbtn></Loddingbtn> ;
      }
      if (user ||guser) {
        navigate('/appointment')
      }
     


      const hendelSing=async(event) =>{
        event.preventDefault();
        const displayName = event.target.name.value
        const email= event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        const susses = await sendEmailVerification()
        if (susses){
            await updateProfile({displayName})
        }
        
        

      }
    return (
        <div>
         <div className="hero-content flex-col ">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
     <h1 className='text-center text-primary text-xl font-bold capitalize'>singup</h1>
      <form onSubmit={hendelSing} className="card-body py-0">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
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
        <div className="form-control ">
          <button className="btn btn-primary uppercase ">singup</button>
        </div>
        
        <p className='text-center'><small>Have an account<Link className='text-primary' to="/login">Login too account</Link></small></p>
      </form>
      <div className="divider mx-6">OR</div>
      <button onClick={() => signInWithGoogle()} className="btn btn-outline m-6 hover:bg-primary">CONTINUE WITH GOOGLE</button>
    </div>
  </div>
</div>
    );
};

export default Singup;