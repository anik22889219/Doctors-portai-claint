import React from 'react';
import fluoride from '../assets/images/fluoride.png'
import cavity from '../assets/images/cavity.png'
import whitening from '../assets/images/whitening.png'
import ServicesCard from './ServicesCard';

const Services = () => {

    const services =[
        {
            _id:1,
            img:fluoride,
            titel:"Fluoride Treatment",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        },
        {
            _id:2,
            img:cavity,
            titel:"Cavity Filling",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        },
        {
            _id:3,
            img:whitening,
            titel:"Teeth Whitening",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        },
    ]
    return (
        <section className='my-20'>
            <div className='text-center'>
            <h1 className='text-xl font-bold text-primary uppercase'>our Services</h1>
            <h2 className='text-3xl font-bold capitalize '>Services we probide</h2>
            </div>
            <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 my-20 justify-items-center '>
                {
                    services.map(service=><ServicesCard key={service._id} sb={service}></ServicesCard>)
                }
            </div>
        </section>
    );
};

export default Services;