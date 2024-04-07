import React from 'react';
import doctor from '../assets/images/doctor-small.png'
import bground from '../assets/images/appointment.png'

const AppointmentBenner = () => {
    return (
        <section style={{
            background: `url(${bground})`
        }} className='flex justify-center items-center my-24'>
            <div className='lg:flex-1'>
                <img className='cover-full mt-[-150px] hidden lg:block' src={doctor}></img>
            </div>
            <div className='lg:flex-1 sm:p-16'>
                <h1 className='mb-3 text-xl text-primary uppercase'>appointment</h1>
                <h1 className='mb-3 text-3xl text-white capitalize'>make an appointment Today</h1>
                <p className='mb-3 text-sm text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn bg-gradient-to-r from-primary to-secondary ">Get Started</button>

            </div>
            
        </section>
    );
};

export default AppointmentBenner;