import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loddingbtn from '../Login/Loddingbtn';
import ServicesRow from './ServicesRow';
import ServiceDeleteModal from './ServiceDeleteModal';

const ManageService = () => {
    const [serviceDelete,setServiceDelete]= useState(null)

    const { data: services, isLoading,refetch } = useQuery({
      queryKey: ['doctors'],
      queryFn: () => fetch('https://doctors-portal-server-dufg.onrender.com/services', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then(res => res.json())
    })
    // console.log(services)
    if (isLoading) {
      return <Loddingbtn></Loddingbtn>
    }
    return (
        <div className='p-9 w-full'>
        <h1 className='text-2xl font-bold capitalize pb-7'>Manage Doctors: {services.length} </h1>
  
        <div className="overflow-x-auto">
          <table className="table table-xs table-pin-cols">
            
            <thead>
              <tr className='bg-accent text-white h-8 '>
                <td></td>
                <td>service Name</td>
                <td></td>
              </tr>
            </thead>
        
            <tbody>
              {
                services.map((s,index)=><ServicesRow
                  key={s._id}
                  service={s}
                  index={index}
                  setServiceDelete={setServiceDelete}
                  ></ServicesRow>)
              }
  
  
            </tbody>
          </table>
        </div>
        {
          serviceDelete && <ServiceDeleteModal
          service={serviceDelete}
          refetch={refetch}
          ></ServiceDeleteModal>
        }
              
              
      </div>
    );
};

export default ManageService;