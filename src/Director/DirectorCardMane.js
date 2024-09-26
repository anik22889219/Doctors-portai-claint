import React from 'react';

const DirectorCardMane = ({ director, index }) => {
    return (
        <div className="card card-side glass w-full p-3">
            <figure >
                <img className='rounded-lg  h-52 w-80'
                    src={director.image}
                    alt="car!" />
            </figure>
            <div className="card-body">
                <h2 className="card-title capitalize">{director.name}</h2>
                <p>{director.email}</p>
                
                <p className='capitalize'>mobile number :{director.number}</p>
                
            </div>
        </div>
    );
};

export default DirectorCardMane;