import React, {  useRef, useState } from 'react';
import { format } from 'date-fns';
import AppointmentCard from './AppointmentCard';
import AvailableSlot from './AvailableSlot';
import BookingFrom from './BookingFrom';

const AvailableServices = ({selected,services,refetch,service,scrolling,}) => {
    const slotRef = useRef(service)
    
    // const [services,setServices] = useState([]);
    const [booked,setBooked] = useState(null)
    const [slot,setSlot] = useState({})

    

   
    return (
        <div ref={service}>
            <div className='my-16'>
            <h1 className='text-center text-primary text-xl '>Available Services on {format(selected, 'PP')}</h1>
            <h1 className='text-center text-accent text-xs '>Pleas select a Service</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center '>
                {
                    services?.map(service=><AppointmentCard
                    key={service._id}
                    services={service}
                    setBooked={setBooked}
                    scrolling={scrolling}
                    slotRef={slotRef}
                    ></AppointmentCard>)
                }
            </div>
            <div>
                {
                    booked && <AvailableSlot
                    key={booked._id}
                    booked={booked}
                    setSlot={setSlot}
                    refetch={refetch}
                    slotRef={slotRef}
                    ></AvailableSlot>
                }
            </div>
            <div>
                {
                    booked && <BookingFrom
                    booked={booked}
                    selected={selected}
                    slot={slot} 
                    setBooked={setBooked}
                    refetch={refetch}
                    ></BookingFrom>
                }
            </div>
            
        </div>
    );
};

export default AvailableServices;