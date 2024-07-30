import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loddingbtn from '../Login/Loddingbtn';
import Users from './Users';

const AllUsers = () => {

const {data,isLoading,refetch} = useQuery({
    queryKey: ['users'],
    queryFn:()=>
    fetch('http://localhost:5000/user',{
        method:'GET',
        headers: {
            authorization : `Bearer ${localStorage.getItem('accessToken')}`

        }
    })
    .then(res=>res.json())
})
if(isLoading){
    return <Loddingbtn></Loddingbtn>
}

    return (
        <div className='p-9 w-full'>
        <div className='flex justify-between '>
        <h1 className='text-2xl font-bold capitalize pb-7'>Totel Users : {data.length}</h1>
        
        </div>
                    <div className="overflow-x-auto">
          <table className="table table-xs  table-pin-cols">
            <thead>
              <tr className='bg-accent text-white h-8 '>
                <td></td> 
                <td>Email</td>  
                <td></td> 
                <td></td>  
              </tr>
            </thead> 
            <tbody>
                {
                    data.map((d,index)=> <Users
                    key={d._id}
                    user={d}
                    index={index}
                    refetch={refetch}
                    ></Users> )
                    
                }
            </tbody>
        
          </table>
        </div>
                </div>
            );
   
};

export default AllUsers;