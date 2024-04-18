import React from 'react';
import Slot from './Slot';

const AvailableSlot = ({booked,setSlot,refetch}) => {
    const {service,slots} =booked
    refetch()
    return (
        <div className='my-20'>
            <h1 className='text-center text-primary text-xl mb-20 '>Available slots for {service}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center '>

        {
            slots.map(slot=><Slot
            key={slot.id}
            slot={slot}
            service={service}
            setSlot={setSlot}
            ></Slot>)
        }
            </div>
        </div>
       
    );
};

export default AvailableSlot;