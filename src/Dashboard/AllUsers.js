import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loddingbtn from '../Login/Loddingbtn';
import Users from './Users';
import MakeAdminModal from './MakeAdminModal';
import DeleteUserModal from './DeleteUserModal';

const AllUsers = () => {
const [makeAdmin,setMakeAdmin] = useState(null)
const [deleteAdmin,setDeleteAdmin]= useState(null)
const {data,isLoading,refetch} = useQuery({
    queryKey: ['users'],
    queryFn:()=>
    fetch('https://doctors-portal-server-dufg.onrender.com/user',{
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
                    setMakeAdmin={setMakeAdmin}
                    setDeleteAdmin={setDeleteAdmin}
                    ></Users> ) 
                    
                }
            </tbody>
        
          </table>
          {
            makeAdmin && <MakeAdminModal
            refetch={refetch}
            user={makeAdmin}
            >
            </MakeAdminModal>
          }
          {
            deleteAdmin && <DeleteUserModal
            refetch={refetch}
            user={deleteAdmin}
            ></DeleteUserModal>
          }
        </div>
                </div>
            );
   
};

export default AllUsers;