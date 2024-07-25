import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loddingbtn from '../Login/Loddingbtn';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import AppoinmrntDatepecker from '../Appoinment/AppoinmrntDatepecker';

const MyAppointments = () => {
    const [user] =useAuthState(auth);

    const { isPending, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch(`http://localhost:5000/bookings?email=${user.email}`)
          .then((res) =>res.json(),
          ),
      })
      
    
      if (isPending) return <Loddingbtn></Loddingbtn>
      const pickup =``; 
      const daypikar=()=>{
         pickup = <AppoinmrntDatepecker></AppoinmrntDatepecker>
      }
    return (
        <div className='p-9 w-full'>
<div className='flex justify-between '>
<h1 className='text-2xl font-bold capitalize pb-7'>My appointment : {data.length}</h1>
<button onClick={daypikar} className="btn btn-outline btn-sm">Default</button>
{pickup}
</div>
            <div className="overflow-x-auto">
  <table className="table table-xs table-pin-rows table-pin-cols">
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
            data.map((d,index)=>  
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