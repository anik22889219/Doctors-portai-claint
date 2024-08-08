import React from 'react';
import { toast } from 'react-toastify';

const MakeAdminModal = ({ refetch, user }) => {
    const makeAdmin = () => {
        fetch(`https://doctors-portal-server-dufg.onrender.com/user/admin/${user.email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to made an Admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Successfully made an Admin')
                }
            })

    }
    return (
        <div>

            <input type="checkbox" id="Make-admin-modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="text-lg font-bold capitalize text-warning">make confirm</h3>
                    <p className="py-4 capitalize">are you sure you want to make admin?</p>
                    <div className="modal-action">
                        <label onClick={makeAdmin} htmlFor="Make-admin-modal" className="btn btn-xs md:btn-sm  bg-primary uppercase">confirm</label>
                        <label htmlFor="Make-admin-modal" className="btn btn-xs md:btn-sm  bg-primary uppercase">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdminModal;