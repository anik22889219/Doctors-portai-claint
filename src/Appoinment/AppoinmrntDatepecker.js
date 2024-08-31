import React, { useState } from 'react';
import chair from '../assets/images/chair.png'
import chairbg from '../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppoinmrntDatepecker = ({selected,setSeleted}) => {
    
    return (
        <div style={{
            background: `url(${chairbg})`,
            backgroundSize:'cover' 
        }} className="hero lg:min-h-screen ">
  <div className="lg:hero-content  flex-col  lg:flex-row-reverse">
    <img src={chair} className="lg:max-w-lg max-w-full rounded-lg shadow-2xl mb-10 lg:mb-0"  alt='chair'/>
    <div  className='card lg:max-w-lg max-w-full bg-base-100 shadow-xl lg:me-20'>
    <DayPicker
      mode="single"
      required
      selected={selected}
      onSelect={setSeleted}
    />
    </div>
  </div>
</div>
    );
};

export default AppoinmrntDatepecker;