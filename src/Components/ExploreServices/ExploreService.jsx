import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";

const ExploreService = () => {
  const [ServiceCategories, setServiceCategories] = useState([]);
  console.log(ServiceCategories);
  useEffect(() => {
    fetch(`http://localhost:5000/serviceCategoty`)
      .then((res) => res.json())
      .then((data) => setServiceCategories(data));
  }, []);
  return (
    <section className='bg-white'>
      <div className='container px-6 py-10 mx-auto'>
        <h1 className='text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white'>
          Our Categories
        </h1>
        <div className='grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 lg:grid-cols-3'>
          {ServiceCategories?.map((singleCategory, i) => (
            <ServiceCard key={i} singleCategory={singleCategory}></ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreService;
