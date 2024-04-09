import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import AppoinmrntDatepecker from './AppoinmrntDatepecker';
import AvailableServices from './AvailableServices';

const Appoinment = () => {
    const [selected,setSeleted] = useState(new Date())
    return (
        <div>
            <AppoinmrntDatepecker selected={selected} setSeleted={setSeleted}></AppoinmrntDatepecker>
            <AvailableServices selected={selected}></AvailableServices>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;