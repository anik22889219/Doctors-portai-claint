import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../src/assets/icons/clock.svg'
import marker from '../../src/assets/icons/marker.svg'
import phone from '../../src/assets/icons/phone.svg'

const Info = () => {
    return (
        <section className='grid gap-4 grid-cols-1 lg:grid-cols-3 mb-6'>
            <InfoCard img={clock} bg={'bg-primary'} titel={'Opening Hours'} discription={'Lorem Ipsum is simply dummy text of the pri'}></InfoCard>
            <InfoCard img={marker} bg={'bg-accent'} titel={'Visit our location'} discription={'Brooklyn, NY 10036, United States'}></InfoCard>
            <InfoCard img={phone} bg={'bg-primary'} titel={'Contact us now'} discription={'+000 123 456789'}></InfoCard>
            
        </section>
    );
};

export default Info;