import React from 'react';

const Users = ({user,index,setDeleteAdmin,setMakeAdmin}) => {
    const {email,role}=user

    

    return (
    <tr  className='font-semibold text-xl md:text-2xl'>
        <td>{index + 1}</td> 
        <td>{email}</td> 
        <td>{role !=='admin' && <>
          <label onClick={()=>setMakeAdmin(user)} htmlFor="Make-admin-modal" className="btn  btn-xs md:btn-sm  bg-primary uppercase">Make Admin</label>
         </> } </td> 
        <td>
        <label onClick={()=>setDeleteAdmin(user)} htmlFor="Delete-User-Modal" className="btn btn-xs md:btn-sm  bg-primary uppercase">Delete</label>

           </td> 
    </tr>)
    
};

export default Users;