import React from 'react';

const DirectorCard = ({director,index,setDirectorDelete}) => {
    
    return (
        <tr className='font-semibold text-xl md:text-2xl'>
        <td>{index + 1}</td>
        <td>
            <div className="flex items-center gap-3">
                <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                        <img
                            src={director.image}
                            alt={director.name} />
                    </div>
                </div>
                <div>
                    <div className="font-bold">{director.name}</div>
                    <div className="text-sm opacity-50">{director.email}</div>
                </div>
            </div>
        </td>
        <td>
            {director.number}
        </td>
        <th>

            <label onClick={()=>setDirectorDelete(director)} htmlFor="Delete-doctor-btn" className="btn btn-xs md:btn-sm bg-primary uppercase">delete</label>

        </th>
    </tr>
    );
};

export default DirectorCard;