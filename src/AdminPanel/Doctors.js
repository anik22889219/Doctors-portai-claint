import React from 'react';
import { toast } from 'react-toastify';

const Doctors = ({ doctor, index, setDoctorDelete }) => {
    const { name, email, specialty, image } = doctor;


    return (
        <tr className='font-semibold text-xl md:text-2xl'>
            <td>{index + 1}</td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={image}
                                alt={name} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {specialty}
            </td>
            <th>

                <label onClick={()=>setDoctorDelete(doctor)} htmlFor="Delete-doctor-btn" className="btn btn-xs md:btn-sm bg-primary uppercase">delete</label>

            </th>
        </tr>
    );
};

export default Doctors;