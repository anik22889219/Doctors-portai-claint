import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const AdminDashboard = () => {
    const [user]= useAuthState(auth);
    const [open, setOpen] = useState(false)
    const [admin]= useAdmin(user);


    const navLink = [
        
            <li key={1} onClick={()=> setOpen(!open)}><Link to={""} > Booking Request</Link></li>,
            <li key={2} onClick={()=> setOpen(!open)}><Link to={"confirmbokings"} >Confirm Bookings</Link></li>,
            <li key={3} onClick={()=> setOpen(!open)}><Link to={"users"} >All users</Link></li>,
            <li key={4} onClick={()=> setOpen(!open)}><Link to={"addService"} >Add Service</Link></li>,
            <li key={5} onClick={()=> setOpen(!open)}><Link to={"manageService"} >Manage Service</Link></li>,
            <li key={6} onClick={()=> setOpen(!open)}><Link to={"addDoctor"} >Add Doctor</Link></li>,
            <li key={7} onClick={()=> setOpen(!open)}><Link to={"manageDoctors"} >Manage Doctor</Link></li>
          ]
  

 
    return (
     <div>
           <div className="navbar lg:block justify-between flex-col bg-base-100 lg:px-6 ">
        <div className=" w-full flex-row-reverse lg:flex-row justify-between lg:justify-start">
          <div className="dropdown ">
            <div  tabIndex="0" role="button" className="btn btn-ghost  lg:hidden">
              <svg onClick={()=> setOpen(true)} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex="0" className={`menu menu-sm dropdown-content right-0 mt-3 z-[1]  p-2 shadow bg-base-100 rounded-box w-52 ${open ? 'block':'hidden'}`}>
              {admin && navLink}
            </ul>
          </div>
          <Link to="/admin" className="btn btn-ghost text-xl">Admin Panel</Link>
        </div>

        <div className='grid grid-cols-4 items-start relative'>
        <div className=" navbar-start sticky top-0 hidden lg:block col-span-1 bg-base-200 h-screen w-full rounded-md">
          <ul className="menu menu-vertical text-xl  px-1">
  
            {admin && navLink}
  
          </ul>
        </div>
      <div className='col-span-3'>
        <Outlet></Outlet>
      </div>

        </div>
  
      </div>


     </div>
    );
};

export default AdminDashboard;