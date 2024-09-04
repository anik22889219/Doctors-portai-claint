import React, { useRef, useState } from 'react';
import Footer from '../Footer/Footer';
import AppoinmrntDatepecker from './AppoinmrntDatepecker';
import AvailableServices from './AvailableServices';
import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import Loddingbtn from '../Login/Loddingbtn';

const Appoinment = () => {

  const service = useRef(null)
  
  
  const scrolling =(elementRef)=>{
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior : 'smooth'
    })
  }
    const [selected,setSeleted] = useState(new Date())

    const formatDate = format(selected, 'PP')
    

    const { data:services,isLoading,refetch } = useQuery({
        queryKey: ['repoData','formatDate'],
        queryFn: () =>
       fetch(`https://doctors-portal-server-dufg.onrender.com/available?date=${formatDate}`)
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
            scrolling={scrolling}
            service ={service}
             ></AppoinmrntDatepecker>
            <AvailableServices 
            refetch={refetch}
            selected={selected}
            services={services}
            service={service}
            scrolling={scrolling}
            
            ></AvailableServices>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;