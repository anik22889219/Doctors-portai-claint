import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {

    const navLink = [
        <li><Link to="/">Home</Link></li>,
        <li><Link to="about">About</Link></li>,
        <li><Link to="appointment">Appointment</Link></li>,
        <li><Link to="reviews">Reviews</Link></li>,
        <li><Link to="contactus">Contact Us</Link></li>,
        <li><Link to="/login">Login</Link></li>,
    ]
        

    return (
        <div class="navbar justify-between bg-base-100 lg:px-6">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLink}
      </ul>
    </div>
    <a class="btn btn-ghost text-xl">Doctors portal</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      
    {navLink}
      
    </ul>
  </div>
</div>
    );
};

export default Navber;