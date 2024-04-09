import React from 'react';
import bground from '../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <section style={{
            background:`url(${bground})`
        }} className='p-10'>
            <div className='text-center'>
            <h1 className='text-xl font-bold text-primary'>Contact Us</h1>
            <h2 className='text-3xl text-white my-3'>Stay connected with us</h2>
            </div>
           <div>
           <form className='flex flex-col items-center'>
           <label className="input lg:w-1/2 w-full input-bordered flex items-center mb-4">
                <input type="email" className="grow" placeholder="Email Address" />
            </label>
            <label className="input lg:w-1/2 w-full input-bordered flex items-center mb-4">
                 <input type="text" className="grow" placeholder="Subject" />
            </label>

            <textarea placeholder="Your message" className="textarea mb-4 textarea-bordered textarea-lg lg:w-1/2 w-full " >

            </textarea>
            <br></br>

            <button className="btn bg-gradient-to-r from-primary to-secondary ">Get Started</button>

           </form>
           </div>


        </section>
    );
};

export default ContactUs;