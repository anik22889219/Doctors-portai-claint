import React from 'react';
import { toast } from 'react-toastify';

const DeleteUserModal = ({refetch,user}) => {

    const hendelDelet = () => {
        fetch(`https://doctors-portal-server-dufg.onrender.com/user/${user.email}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`successfully delete the user `)
                    refetch();
                }
            })
    } 

    return (
        <div>

<input type="checkbox" id="Delete-User-Modal" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="text-lg font-bold">Hello!</h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
    <div className="modal-action">
    <label onClick={hendelDelet} htmlFor="Delete-User-Modal" className="btn btn-xs md:btn-sm bg-error uppercase">delete</label>
      <label htmlFor="Delete-User-Modal" className="btn btn-xs md:btn-sm  uppercase">Close!</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default DeleteUserModal;