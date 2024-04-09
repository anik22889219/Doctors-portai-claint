import React from 'react';

const Testimonialcard = ({tm}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <p>{tm.comment}</p>
    <div className="card-actions justify-center items-center gap-7">
            <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={tm.img} />
                    </div>
            </div>
        <div>
            <h1 className='font-bold text-xl'>{tm.patientname}</h1>
            <p>{tm.location}</p>
        </div>
    </div>
    
  </div>
</div>
    );
};

export default Testimonialcard;