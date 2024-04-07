import React from 'react';

const InfoCard = ({img,bg,titel,discription}) => {
    return (
        <div className={`card lg:card-side p-3 shadow-xl text-white font-semibold ${bg}`}>
  <figure><img src={img} alt="Album"/></figure>
  <div className="card-body py-3">
    <h2 className="card-title">{titel}</h2>
    <p>{discription}</p>
  </div>
</div>
    );
};

export default InfoCard;