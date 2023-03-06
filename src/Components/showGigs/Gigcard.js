import React from 'react';

const Gigcard = ({gig}) => {

    const {title, serviceImage, price} = gig;
    
    return (
        <div>

  <div class="w- p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
    <img class="w-full object-cover h-52 rounded-t-md" src={serviceImage} alt="" />
    <div class="mt-4">
      <h1 class="text-2xl font-bold text-gray-700">{title}</h1>
      
   
      <div class="mt-4 mb-2 flex justify-between pl-4 pr-2">
        <button class="block text-xl font-semibold text-gray-700 cursor-auto">${price}</button>
        <button class="text-lg block font-semibold py-2 px-6 text-green-100 hover:text-white bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300">Buy</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default Gigcard;