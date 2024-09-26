import React from 'react';

import quote from '../assets/icons/quote.svg'
import people1 from '../assets/images/people1.png'
import people2 from '../assets/images/people2.png'
import people3 from '../assets/images/people3.png'
import Testimonialcard from './Testimonialcard';
import { useQuery } from '@tanstack/react-query';
import Loddingbtn from '../Login/Loddingbtn';

const Testimonial = () => {


    const { data, isLoading,refetch } = useQuery({
      queryKey: ['doctors'],
      queryFn: () => fetch('https://doctors-portal-server-dufg.onrender.com/doctor', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then(res => res.json())
    })
    // console.log(doctors)
    if (isLoading) {
      return <Loddingbtn></Loddingbtn>
    }

    // const patient =[
    //     {
    //         _id:1,
    //         comment:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    //         patientname:"Winson Herry",
    //         location:"california",
    //         img:people1
    //     },
    //     {
    //         _id:2,
    //         comment:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    //         patientname:"Toniya Molee ",
    //         location:"usa",
    //         img:people2
    //     }, 
    //     {
    //         _id:3,
    //         comment:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    //         patientname:"Hasema khaton",
    //         location:"Bangladesh",
    //         img:people3
    //     }
    
    // ]
    return (
        <section className='mb-20'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-xl font-bold text-primary'>Doctors</h1>
                    <h2 className='text-3xl '>Our Doctors</h2>
                </div>
                <div>
                    <img className='size-24 lg:size-48' src={quote}></img>
                </div>

            </div>
            <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 my-7 justify-items-center'>
            {
                data.map(tm=><Testimonialcard 
                key={tm._id}
                tm={tm}
                ></Testimonialcard>)
            }

            </div>
            
        </section>
    );
};

export default Testimonial;