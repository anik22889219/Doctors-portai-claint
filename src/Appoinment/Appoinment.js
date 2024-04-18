import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import AppoinmrntDatepecker from './AppoinmrntDatepecker';
import AvailableServices from './AvailableServices';
import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import Loddingbtn from '../Login/Loddingbtn';

const Appoinment = () => {
    const [selected,setSeleted] = useState(new Date())

    const formatDate = format(selected, 'PP')
    

    const { data:services,isLoading,refetch } = useQuery({
        queryKey: ['repoData','formatDate'],
        queryFn: () =>
       fetch(`http://localhost:5000/available?date=${formatDate}`)
        .then(res=>res.json()),
      })
      
      if(isLoading){
        return <Loddingbtn></Loddingbtn>
      }
    return (
        <div>
            <AppoinmrntDatepecker 
            refetch={refetch}
            selected={selected}
            setSeleted={setSeleted}
             ></AppoinmrntDatepecker>
            <AvailableServices 
            refetch={refetch}
            selected={selected}
            services={services}
            
            ></AvailableServices>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;