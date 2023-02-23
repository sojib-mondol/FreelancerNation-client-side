import React from "react";

const ServiceCard = ({ singleCategory }) => {
  // console.log(singleCategory);
  const { service_name, service_image } = singleCategory;
  return (
    <div class='flex flex-col justify-center items-center text-4xl'>
      <img
        class='object-cover w-full h-56 rounded-lg lg:w-64'
        src={service_image}
        alt={service_name}
      />

      <div class='flex flex-col justify-between py-6 lg:mx-6'>
        <p class='text-xl font-semibold font-roboto text-gray-900 mb-3'>
          {service_name}
        </p>

        <button class='group relative border-green-500 h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow'>
          <div class='absolute inset-0 w-3 bg-green-500 transition-all duration-[250ms] ease-out group-hover:w-full'></div>
          <span class='relative text-black group-hover:text-white font-roboto'>
            Join
          </span>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
