import React from 'react';
import { toast } from 'react-toastify';

const MakeBookingConfirmModal = ({refetch,user}) => {

    const confirmQuarry = {
        
                    Treatment : user.Treatment,
                    Slot : user.Slot,
                    Date :user.Date

             }
    const confirmOrder = () => {
        fetch(`https://doctors-portal-server-dufg.onrender.com/booking/${user.Email}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(confirmQuarry)
            
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to confirm slot')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Successfully booked a slot')
                }
                // console.log(data)
            })

    }
    return (
        <div>

        <input type="checkbox" id="Make-admin-modal" className="modal-toggle" />
        <div className="modal" role="dialog">
            <div className="modal-box">
                <h3 className="text-lg font-bold capitalize text-warning">make confirm</h3>
                <p className="py-4 capitalize">are you sure the slot was confirmed</p>
                <div className="modal-action">
                    <label onClick={confirmOrder} htmlFor="Make-admin-modal" className="btn btn-xs md:btn-sm  bg-primary uppercase">confirm</label>
                    <label htmlFor="Make-admin-modal" className="btn btn-xs md:btn-sm  bg-primary uppercase">Close!</label>
                </div> 
            </div>
        </div>
    </div>
    );
};

export default MakeBookingConfirmModal;