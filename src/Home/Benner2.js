import React from 'react';
import treatment from '../assets/images/treatment.png'
import { Link } from 'react-router-dom';

const Benner2 = () => {
    return (
        <div className="hero min-h-screen my-40 ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
    <div className='lg:w-1/2 p-20'>
      <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <Link to="appointment"  className="btn bg-gradient-to-r from-primary to-secondary ">Get Started</Link>
    </div>
  </div>
</div>
    );
};

export default Benner2;