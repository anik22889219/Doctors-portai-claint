import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const BookingFrom = ({booked,selected,slot,setBooked}) => {
  
const [user]=useAuthState(auth)


    const hendelbooking=(event)=>{
        event.preventDefault();
        const Treatment = booked.service;
        const Date = event.target.date.value
        const Slot = event.target.slot.value
        const Name = event.target.name.value
        const Number = event.target.number.value
        const Email = event.target.email.value
        console.log({ Treatment,Date,Slot,Name,Number,Email})
        setBooked(null)
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6"  className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <label htmlFor="my-modal-6" className="btn btn-primary btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg mb-4">{booked.service}</h3>
    <form onSubmit={hendelbooking} className='grid grid-cols-1 gap-5 justify-items-center'>
    <input type="text" name='date'disabled value={format(selected, 'PP')||''} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
    <input type="text" name='slot' disabled value={slot.time||''} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
    <input type="text" name='name' disabled value={user.displayName||''} className="input input-bordered w-full max-w-xs" />
    <input type="email" name='email' disabled value={user.email||''}  className="input input-bordered w-full max-w-xs" />
    <input type="number" name='number' required placeholder="Phone Number" className="input input-bordered w-full max-w-xs" title='12 number need' />
    <input type="submit"  className="btn btn-primary text-white w-full max-w-xs" />
    </form>
  </div>
</div>
        </div>
    );
};

export default BookingFrom;