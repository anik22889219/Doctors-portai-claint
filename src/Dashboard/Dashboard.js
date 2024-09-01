import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loddingbtn from '../Login/Loddingbtn';

const Dashboard = () => {
  const [user]= useAuthState(auth);
  const [admin]= useAdmin(user);
  const [open, setOpen] = useState(false)
  if(!user){
    return <Loddingbtn></Loddingbtn>
  }
    return (
        <div className="drawer lg:drawer-open">
  <input id="side-ber" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-end lg:items-start ">
    {/* <!-- Page content here --> */}
    <div className="flex  lg:hidden">
        <label htmlFor="side-ber" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg onClick={()=> setOpen(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div>  
    <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="side-ber" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className={`menu p-4  min-h-full bg-base-200  ${open ? 'visible ':'hidden lg:block'}`}>
      {/* <!-- Sidebar content here --> */}
      <li onClick={()=> setOpen(!open)}><Link to={""} >My Appointments</Link></li>
      <li onClick={()=> setOpen(!open)}><Link to={"reaviews"} >My Reviews</Link></li>
      {admin && <>
        <li onClick={()=> setOpen(!open)}><Link to={"users"} >All users</Link></li>
        <li onClick={()=> setOpen(!open)}><Link to={"addDoctor"} >Add Doctor</Link></li>
        <li onClick={()=> setOpen(!open)}><Link to={"manageDoctors"} >Manage Doctor</Link></li>
      </>}
      
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;