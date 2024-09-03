import React from 'react';

const AppointmentCard = ({services,setBooked}) => {
  
    const {service}= services
    
    return (
        <button onClick={()=>setBooked(services)}  className="card  w-60 lg:card-side bg-base-100 shadow-xl ">
  <div className="card-body ">
    <h2 className="card-title justify-center text-primary ">{service}</h2>
  </div>
</button>
    );
};

export default AppointmentCard;