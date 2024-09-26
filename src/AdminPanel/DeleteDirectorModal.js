import React from 'react';
import { toast } from 'react-toastify';

const DeleteDirectorModal = ({refetch,deleteDirector}) => {
    const hendelDelet = () => {
        fetch(`https://doctors-portal-server-dufg.onrender.com/director/${deleteDirector.email}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`successfully remove an Doctor ${deleteDirector.name} `)
                    refetch();
                }
            })
    }
    return (
        <div>
        <input type="checkbox" id="Delete-doctor-btn" className="modal-toggle" />
        <div className="modal" role="dialog">
            <div className="modal-box">
                <h3 className="text-lg font-bold capitalize text-error">are you sure you want to delete doctor {deleteDirector.name}?</h3>
                <p className="py-4 capitalize">Once delete there is no going back</p>
                <div className="modal-action">
                    <label onClick={hendelDelet} htmlFor="Delete-doctor-btn" className="btn btn-xs md:btn-sm bg-error uppercase">delete</label>
                    <label htmlFor="Delete-doctor-btn" className="btn btn-xs md:btn-sm bg-primary uppercase">no</label>
                </div>
            </div>
        </div>
    </div>
    );
};

export default DeleteDirectorModal;