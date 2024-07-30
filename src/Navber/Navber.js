import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import { useAuthState,useSignOut } from 'react-firebase-hooks/auth';

const Navber = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, sloading, serror] = useSignOut(auth);


    const navLink = [
        <li key={1}><Link to="/">Home</Link></li>,
        <li key={2}><Link to="about">About</Link></li>,
        <li key={3}><Link to="appointment">Appointment</Link></li>,
        <li key={4}><Link to="reviews">Reviews</Link></li>,
        <li key={7}><Link to="contactus">Contact Us</Link></li>,
        <li key={9}>
          {
            user && <Link to="dashboard">Dashboard</Link>
          }
          </li>,
        <li key={8}>
          {
          user ? <button  onClick={async () => {
            const success = await signOut();
            if (success) {
              alert('You are sign out');
              localStorage.removeItem('accessToken')
            }
          }} className="">Sing out</button> : <Link to="/login">Login</Link>
         }
         </li>,
        
        
    ]
    
        

    return (
        <div className="navbar justify-between bg-base-100 lg:px-6">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
        <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLink}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Doctors portal</a>
  </div>
  
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
    {navLink }
      
    </ul>
  </div>
</div>
    );
};

export default Navber;