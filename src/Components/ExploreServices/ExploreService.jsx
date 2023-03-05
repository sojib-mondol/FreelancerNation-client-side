import React, { useEffect, useState } from "react";
import Skeleton from "../Shared/Skeleton/Skeleton";
import ServiceCard from "./ServiceCard/ServiceCard";

const ExploreService = () => {
  const [loading, setLoading] = useState(false);
  const [ServiceCategories, setServiceCategories] = useState([]);


  useEffect(() => {
    setLoading(true);
    fetch(`https://freelancer-nation-backend.vercel.app/serviceCategoty`)
      .then((res) => res.json())
      .then((data) => {
        setServiceCategories(data)
        setLoading(false);
      });
  }, []);


  if(loading){
      return   <Skeleton></Skeleton>
  }


  return (
    <section className='bg-white'>
      <div className='container px-6 py-10 mx-auto'>
        <h1 className='text-3xl font-semibold text-green-500 capitalize lg:text-4xl dark:text-white'>
          Our Categories
        </h1>
        <div className='grid grid-cols-1 gap-8 mt-4  md:grid-cols-2 lg:grid-cols-3'>
          {ServiceCategories?.map((singleCategory, i) => (
            <ServiceCard key={i} singleCategory={singleCategory}></ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreService;
