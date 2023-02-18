import React from "react";

const GuidelineCard = ({data}) => {
    const {image, title, info} = data;
  return (
    <div>
      <div className="w-full overflow-hidden bg-white rounded-lg dark:bg-gray-800">
        <img
          className="object-cover w-full h-56"
          src={image}
          alt="avatar"
        />

        <div className="py-5 ">
       <h2 className="text-lg font-bold text-[#404145]">{title}</h2>
          <span className="text-base text-[#74767e] dark:text-gray-200">
            {info}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GuidelineCard;
