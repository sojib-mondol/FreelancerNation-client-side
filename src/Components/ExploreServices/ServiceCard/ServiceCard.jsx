import React from "react";
import { Link } from "react-router-dom";
import JoinButton from "./JoinButton/JoinButton";

const ServiceCard = ({ singleCategory }) => {
  // console.log(singleCategory);
  const { service_name, service_image } = singleCategory;


  return (
    <div className='flex flex-col justify-center items-center text-4xl border rounded-lg hover:shadow-xl'>
      <img
        className='object-cover w-full h-56 rounded-lg lg:w-86'
        src={service_image}
        alt={service_name}
      />

      <div className='flex flex-col justify-between py-6 lg:mx-6'>
        <p className='text-xl font-semibold font-roboto text-gray-900 mb-3'>
          {service_name}
        </p>

        <Link to='/becomeASeller/service_category/registerseller'>
        <JoinButton></JoinButton>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
