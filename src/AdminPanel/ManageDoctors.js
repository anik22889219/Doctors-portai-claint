import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loddingbtn from '../Login/Loddingbtn';
import Doctors from './Doctors';
import DoctorDeleteModal from './DoctorDeleteModal';

const ManageDoctors = () => {
  const [doctorDelete,setDoctorDelete]= useState(null)

  const { data: doctors, isLoading,refetch } = useQuery({
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
  return (
    <div className='p-9 w-full'>
      <h1 className='text-2xl font-bold capitalize pb-7'>Manage Doctors: {doctors.length} </h1>

      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-cols">
          {/* <!-- head --> */}
          <thead>
            <tr className='bg-accent text-white h-8 '>
              <td></td>
              <td>Name</td>
              <td>specialty</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {
              doctors.map((doctor, index) => <Doctors
                key={doctor._id}
                doctor={doctor}
                index={index}
                setDoctorDelete={setDoctorDelete}
              ></Doctors>)
            }


          </tbody>
        </table>
      </div>
            {
              doctorDelete && <DoctorDeleteModal
            doctor={doctorDelete}
            refetch={refetch}
            ></DoctorDeleteModal>
            }
            
    </div>
  );
};

export default ManageDoctors;