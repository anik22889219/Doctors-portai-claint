import React from 'react';

import quote from '../assets/icons/quote.svg'
import people1 from '../assets/images/people1.png'
import people2 from '../assets/images/people2.png'
import people3 from '../assets/images/people3.png'
import Testimonialcard from './Testimonialcard';

const Testimonial = () => {

    const patient =[
        {
            _id:1,
            comment:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            patientname:"Winson Herry",
            location:"california",
            img:people1
        },
        {
            _id:2,
            comment:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            patientname:"Toniya Molee ",
            location:"usa",
            img:people2
        },
        {
            _id:3,
            comment:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            patientname:"Hasema khaton",
            location:"Bangladesh",
            img:people3
        }
    
    ]
    return (
        <section className='mb-20'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-xl font-bold text-primary'>Testimonial</h1>
                    <h2 className='text-3xl '>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='size-24 lg:size-48' src={quote}></img>
                </div>

            </div>
            <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 my-7 justify-items-center'>
            {
                patient.map(tm=><Testimonialcard 
                key={tm._id}
                tm={tm}
                ></Testimonialcard>)
            }

            </div>
            
        </section>
    );
};

export default Testimonial;