import React from 'react';
import { toast } from 'react-toastify';

const AddService = () => {

    const hendelService = async (event) => {
        event.preventDefault();
        const ServicesName = event.target.name.value

        const slote = [
            {
                id : '1',
                time : "8:00 AM - 8:30 AM"
            },
            {
                id : '2',
                time : "8:30 AM - 9:00 AM"
            },
            {
                id : '3',
                time : "9:00 AM - 9:30 AM"
            },
            {
                id : '4',
                time : "9:30 AM - 10:00 AM"
            },
            {
                id : '5',
                time : "10:00 AM - 10:30 AM"
            },
            {
                id : '6',
                time : "10:30 AM - 11:00 AM"
            },
            {
                id : '7',
                time : "11:00 AM - 11:30 AM"
            },
            {
                id : '8',
                time : "11:30 AM - 12:00 AM"
            },
            {
                id : '9',
                time : "12:00 AM - 12:30 AM"
            },
            {
                id : '10',
                time : "12:30 AM - 01:00 AM"
            },
        ]
        const serviceinfo = {
            service : ServicesName,
            slots : slote
        }
        // console.log(doctorInfo);
        fetch('https://doctors-portal-server-dufg.onrender.com/addServices', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(serviceinfo)
        })
            .then(res => res.json())
            .then(d => {
                if (d.insertedId) {
                    toast.success('successfully added')
                    event.target.reset()
                }
                else {
                    toast.error('fail to added')
                }
            })

    }

    return (
        <div className='p-9 w-full'>
            <h1 className='text-2xl font-bold capitalize pb-7'>Add Doctor</h1>
            <div>
                <form onSubmit={hendelService} className="card-body py-0">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Add Services Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Services Name" className="input input-bordered input-primary" required />
                    </div>


                    <div className="form-control ">
                        <button className="btn btn-primary uppercase ">Add</button>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default AddService;