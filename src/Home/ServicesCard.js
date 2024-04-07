import React from 'react';

const ServicesCard = ({sb}) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={sb.img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{sb.titel}</h2>
    <p>{sb.description}</p>
  </div>
</div>
    );
};

export default ServicesCard;