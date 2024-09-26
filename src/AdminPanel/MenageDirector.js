import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loddingbtn from '../Login/Loddingbtn';
import DeleteDirectorModal from './DeleteDirectorModal';
import DirectorCard from './DirectorCard';

const MenageDirector = () => {
    const [directorDelete,setDirectorDelete]= useState(null)

    const { data: directors, isLoading,refetch } = useQuery({
      queryKey: ['doctors'],
      queryFn: () => fetch('https://doctors-portal-server-dufg.onrender.com/director', {
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
    return (
        <div className='p-9 w-full'>
      <h1 className='text-2xl font-bold capitalize pb-7'>Manage Director: {directors.length} </h1>

      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-cols">
          {/* <!-- head --> */}
          <thead>
            <tr className='bg-accent text-white h-8 '>
              <td></td>
              <td>Name</td>
              <td>Number</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {
              directors.map((director, index) => <DirectorCard
                key={director._id}
                director={director}
                index={index}
                setDirectorDelete={setDirectorDelete}
              ></DirectorCard>)
            }


          </tbody>
        </table>
      </div>
            {
              directorDelete && <DeleteDirectorModal
            deleteDirector={directorDelete}
            refetch={refetch}
            ></DeleteDirectorModal>
            }
            
    </div>
    );
};

export default MenageDirector;