import React from 'react';
import Bennar from './Bennar';
import Info from './Info';
import Services from './Services';
import AppointmentBenner from './AppointmentBenner';
import Benner2 from './Benner2';
import Testimonial from './Testimonial';
import ContactUs from './ContactUs';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <section className='mx-5'>
            <Bennar></Bennar>
            <Info></Info>
            <Services></Services>
            <Benner2></Benner2>
            <AppointmentBenner></AppointmentBenner>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </section>
    );
};

export default Home;