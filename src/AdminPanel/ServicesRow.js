import React from 'react';

const ServicesRow = ({service, index, setServiceDelete }) => {
    // console.log(service)
    return (
        <tr className='font-semibold text-xl md:text-2xl'>
            <td>{index + 1}</td>
            <td>
            <div className="font-bold">{service.service}</div>
            </td>
           
            <th>

                <label onClick={()=>setServiceDelete(service)} htmlFor="Delete-doctor-btn" className="btn btn-xs md:btn-sm bg-primary uppercase">delete</label>

            </th>
        </tr>
    );
};

export default ServicesRow;