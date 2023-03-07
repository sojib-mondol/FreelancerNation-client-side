import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import GuidelineCard from "./GuidelineCard";
import { guidelineData } from "./GuidelineData";



const Guideline = () => {
  return (
    <section className="guideline px-4 py-5 mx-auto md:px-24 mt-10">
      <div className="flex justify-between mb-7">
        <h2 className="text-[#404145] text-3xl font-bold">Freelancer Guides</h2>
        <Link to='/freelancer-guide' className="text-[#446ee7] text-xl flex items-center">
          See More Guides <FaChevronRight className="ml-1" />{" "}
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
        {guidelineData.map((data) => (
          <GuidelineCard key={data.id} data={data}></GuidelineCard>
        ))}
      </div>
    </section>
  );
};

export default Guideline;
