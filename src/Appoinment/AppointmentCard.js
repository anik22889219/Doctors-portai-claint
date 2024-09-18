import React from 'react';
import AvailableSlot from './AvailableSlot';

const AppointmentCard = ({services,setBooked,slotRef,scrolling}) => {
  
    const {service}= services
    
    return (
       <div onClick={()=>scrolling(slotRef)}>
         <button onClick={()=>setBooked(services)}  className="card  w-60 lg:card-side bg-base-100 shadow-xl ">
  <div className="card-body ">
    <h2 className="card-title justify-center text-primary ">{service}</h2>
  </div>
</button>
       </div>
    ); 
};

export default AppointmentCard;