import React from 'react';

const ServicesCard = ({sb}) => {
    return (
        <div className="card lg:w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={sb.img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{sb.titel}</h2>
    <p>{sb.description}</p>
  </div>
</div>
    );
};

export default ServicesCard;