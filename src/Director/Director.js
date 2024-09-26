import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loddingbtn from '../Login/Loddingbtn';
import DirectorCardMane from './DirectorCardMane';

const Director = () => {
    const { data: directors, isLoading, refetch } = useQuery({
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
        <div>
            <h1 className='capitalize text-center font-bold text-3xl py-8'>our honorable directors</h1>

         <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-5 justify-center'>
            {
                directors.map((director,index) => <DirectorCardMane
                key={director._id}
                director={director}
                index ={index}
                ></DirectorCardMane>
                   
                )
            }
        </div>    
        </div>
       
    );
};

export default Director;