import React from "react";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";
import icon5 from "../../assets/icon5.svg";
import icon6 from "../../assets/icon6.svg";
import icon7 from "../../assets/icon7.svg";
import icon8 from "../../assets/icon8.svg";
import icon9 from "../../assets/icon9.svg";
import icon10 from "../../assets/icon10.svg";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div className="max-w-[1440px] w-[95vw] mx-auto my-10">
      <h3 className="text-3xl font-bold font-montserrat ml-16 my-8">
        Explore the Marketplace
      </h3>
      <div className="my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <Link to="/graphic-design">
          <div className="  flex items-center justify-center flex-col font-roboto">
            <img className="w-24" src={icon1} alt="" />
            <span className="uppercase">Graphic Design</span>
          </div>
        </Link>
        <div className="flex items-center justify-center flex-col font-roboto">
          <img className="w-24" src={icon2} alt="" />
          <span className="uppercase">Digital Marketing</span>
        </div>
        <div className="flex items-center justify-center flex-col font-roboto">
          <img className="w-24" src={icon3} alt="" />
          <span className="uppercase">Writing & Translation</span>
        </div>
        <div className="flex items-center justify-center flex-col font-roboto">
          <img className="w-24" src={icon4} alt="" />
          <span className="uppercase">Video & Animation</span>
        </div>
        <div className="flex items-center justify-center flex-col font-roboto">
          <img className="w-24" src={icon5} alt="" />
          <span className="uppercase">Music & audio</span>
        </div>
        <div className="flex items-center justify-center flex-col font-roboto">
          <img className="w-24" src={icon6} alt="" />
          <span className="uppercase">Programming & Tech</span>
        </div>
        <div className="flex items-center justify-center flex-col font-roboto">
          <img className="w-24" src={icon7} alt="" />
          <span className="uppercase">Business</span>
        </div>
        <div className="flex items-center justify-center flex-col font-roboto">
          <img className="w-24" src={icon8} alt="" />
          <span className="uppercase">LifeStyle</span>
        </div>
        <div className="flex items-center justify-center flex-col font-roboto">
          <img className="w-24" src={icon9} alt="" />
          <span className="uppercase">Data Science</span>
        </div>
        <div className="flex items-center justify-center flex-col font-roboto">
          <img className="w-24" src={icon10} alt="" />
          <span className="uppercase">Photography</span>
        </div>
      </div>
    </div>
  );
};

export default Explore;
