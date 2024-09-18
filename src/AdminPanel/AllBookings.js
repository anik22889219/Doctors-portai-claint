import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loddingbtn from '../Login/Loddingbtn';
import { IoMdCall } from "react-icons/io";
import MakeBookingConfirmModal from './MakeBookingConfirmModal';

const AllBookings = () => {
    const [confirm, setConfirm] = useState(null)
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () =>
            fetch('https://doctors-portal-server-dufg.onrender.com/allbookings', {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`

                }
            })
                .then(res => res.json())
    })
    if (isLoading) {
        return <Loddingbtn></Loddingbtn>
    }
    
    return (
        <div>
            <div className='p-9 w-full'>
                <div className='flex justify-between '>
                    <h1 className='text-2xl font-bold capitalize pb-7'>Totel Bookings Request : {data.length}</h1>

                </div>
                <div className="overflow-x-auto">
                    <table className="table table-xs  table-pin-cols">
                        <thead>
                            <tr className='bg-accent text-white h-8 '>
                                <td></td>
                                <td>Email</td>
                                <td>Number</td>
                                <td>Treatment</td>
                                <td>Slot</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((d, index) => <tr key={index} className='font-semibold text-xl md:text-2xl'>
                                    <td >{index + 1}</td>
                                    <td>
                                        <>
                                            <h1>{d.Name}</h1>
                                            <h3>{d.Email}</h3>
                                        </></td>
                                    <td>{d.Number}</td>
                                    <td>{d.Treatment}</td>
                                    <td>{d.Slot}</td>
                                    <td>
                                        <label onClick={() => { }} htmlFor="Delete-User-Modal" className="btn btn-xs md:btn-sm  bg-primary uppercase"><IoMdCall></IoMdCall></label>
                                    </td>
                                    <td>{d.role !== 'confirmed' && <>
                                        <label onClick={() => setConfirm(d)} htmlFor="Make-admin-modal" className="btn  btn-xs md:btn-sm  bg-primary uppercase">confirm</label>
                                    </>} </td>
                                </tr>)

                            }
                        </tbody>

                    </table>

                    {
            confirm && <MakeBookingConfirmModal
            refetch={refetch}
            user={confirm}
            >
            </MakeBookingConfirmModal>
          }

                </div>
            </div>
        </div>

    );

};

export default AllBookings;