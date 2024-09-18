import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingFrom = ({ booked, selected, slot, setBooked, refetch }) => {

  const [user] = useAuthState(auth)
  // console.log(user.email)

  const hendelbooking = (event) => {
    event.preventDefault();
    const Treatment = booked.service;
    const serviceId = booked._id
    const SlotId = slot.id
    const Date = event.target.date.value
    const Slot = event.target.slot.value
    const Name = event.target.name.value
    const Number = event.target.number.value
    const Email = user.email
    const booking = {
      Treatment,
      serviceId,
      SlotId,
      Date,
      Slot,
      Name,
      Number,
      Email
    }
    fetch('https://doctors-portal-server-dufg.onrender.com/bookings', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(booking),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          toast(`Successfully set an appointment on ${Date} at ${Slot}`)
          refetch()
        }
        else {
          toast(`Already set an appointment on ${Date} at ${Slot}`)

        }
      })

    setBooked(null)
  }
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label htmlFor="my-modal-6" className="btn btn-primary btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg mb-4">{booked.service}</h3>
          <form onSubmit={hendelbooking} className='grid grid-cols-1 gap-5 justify-items-center'>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Appointment Date</span>
              </label>
              <input type="text" name='date' value={format(selected, 'PP') || ''} placeholder="Services Name" className="input input-bordered input-primary" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Appointment Time</span>
              </label>
              <input type="text" name='slot' value={slot.time || ''} placeholder="Type here" className="input input-bordered input-primary" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Patient Name</span>
              </label>
              <input type="text" name='name' placeholder='Enter Patient Name' className="input input-bordered input-primary" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Patient Number</span>
              </label>
              <input type="text" name='number' required placeholder="Phone Number" className="input input-bordered input-primary" />
            </div>
            <div className="form-control ">
              <button className="btn  btn-primary uppercase ">Submit Booking</button>
            {/* <button type="submit Booking" className="btn btn-bordered btn-primary " />  */}
            </div>
             
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingFrom;