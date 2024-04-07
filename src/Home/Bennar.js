import React from 'react';
import chair from '../../src/assets/images/chair.png'
import Bgchair from '../../src/assets/images/bg.png'



const Bennar = () => {
    return (
        <div style={{
            background: `url(${Bgchair})`
        }} className="hero min-h-screen ">
  <div className="hero-content  flex-col lg:flex-row-reverse">
    <img src={chair} className="max-w-lg rounded-lg shadow-2xl " />
    <div className=''>
      <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn bg-gradient-to-r from-primary to-secondary ">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Bennar;