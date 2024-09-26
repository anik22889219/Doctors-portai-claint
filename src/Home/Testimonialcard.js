import React from 'react';

const Testimonialcard = ({tm}) => {
    return (
        <div className="card lg:w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    {/* <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p> */}
    <div className="card-actions justify-center items-center gap-7">
            <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={tm.image} />
                    </div>
            </div>
        <div>
            <h1 className='font-bold text-xl'>{tm.name}</h1>
            <p>{tm.specialty}</p>
        </div>
    </div>
    
  </div>
</div>
    );
};

export default Testimonialcard;