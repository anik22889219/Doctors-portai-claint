import React from 'react';
import chair from '../../src/assets/images/chair.png'
import Bgchair from '../../src/assets/images/bg.png'
import { Link } from 'react-router-dom';



const Bennar = () => {
    return (
        <div style={{
            background: `url(${Bgchair})`
        }} className="hero md:mb-20 mb-10 ">
  <div className="hero-content  flex-col lg:flex-row-reverse">
    <img src={chair} className="lg:max-w-lg max-w-full  rounded shadow-2xl " />
    <div className=''>
      <h1 className="lg:text-5xl text-2xl font-bold">Your New Smile Starts Here</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <Link to="appointment"  className="btn bg-gradient-to-r from-primary to-secondary ">Get Started</Link>
    </div>
  </div>
</div>
    );
}; 

export default Bennar;