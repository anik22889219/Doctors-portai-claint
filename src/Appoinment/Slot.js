import React from 'react';

const Slot = ({service,slot,setSlot}) => {
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body items-center text-center">
    <h2 className="card-title">{service}</h2>
    <p>{slot.time}</p>
    <div className="card-actions">
      <label htmlFor="my-modal-6" onClick={()=>setSlot(slot)} className="btn btn-primary">Book Appointment</label>
    </div>
  </div>
</div>
    );
};

export default Slot;