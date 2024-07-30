import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Loddingbtn from '../Login/Loddingbtn';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyAppointments = () => {
  // const [appointment,setAppointment]= useState([]);
    const [user] =useAuthState(auth); 
    const navigate = useNavigate();

    const { isLoading,data:appointment } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch(`http://localhost:5000/bookings?email=${user.email}`,{
            method: 'GET',
            headers:{
              'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
          })
          .then((res) =>{
            if(res.status===401 || res.status===403){
              signOut(auth)
              navigate('/')
              localStorage.removeItem('accessToken')
            }
            // console.log('res',res)
            return res.json()}
          ),
      })

    // useEffect(()=>{
    //   if(user){
    //     fetch(`http://localhost:5000/bookings?email=${user.email}`,{
    //       method: 'GET',
    //       headers:{
    //         'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
    //       }
    //     })
    //     .then(res=>res.json())
    //     .then(data=>setAppointment(data));
    //   }
    // },[user])
      
    
    // if (!user) return <Loddingbtn></Loddingbtn>
    if (isLoading) return <Loddingbtn></Loddingbtn>
    
    return (
        <div className='p-9 w-full'>
<div className='flex justify-between '>
<h1 className='text-2xl font-bold capitalize pb-7'>My appointment : {appointment.length}</h1>

</div>
            <div className="overflow-x-auto">
  <table className="table table-xs  table-pin-cols">
    <thead>
      <tr className='bg-accent text-white h-8 '>
        <td></td> 
        <td>Name</td> 
        <td>Date</td> 
        <td>TIME</td> 
        <td>TREATMENT</td> 
        <td>PAYMENT</td> 
        
      </tr>
    </thead> 
    <tbody>
        {
            appointment.map((d,index)=>  
            <tr key={d._id} className='font-semibold text-2xl'>
                <td>{index + 1}</td> 
                <td>{d.Name}</td> 
                <td>{d.Date}</td> 
                <td>{d.Slot}</td> 
                <td>{d.Treatment}</td> 
                <td><button className="btn btn-sm bg-primary uppercase">Pay</button> </td> 
            </tr>)
        }
    </tbody>

  </table>
</div>
        </div>
    );
};

export default MyAppointments;