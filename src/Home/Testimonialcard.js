import React from 'react';

const Testimonialcard = ({tm}) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <p>{tm.comment}</p>
    <div class="card-actions justify-center items-center gap-7">
            <div class="avatar">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
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