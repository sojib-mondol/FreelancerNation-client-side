import React from "react";

const GuidelineCard = ({data}) => {
  const { image, title, info } = data;
  const shortTitle = title?.slice(0,35)
  const shortInfo = info?.slice(0,40)
  return (
    <div>
      <div className="w-full overflow-hidden bg-white rounded-lg">
        <img
          className="object-cover w-full h-56"
          src={image}
          alt="avatar"
        />

        <div className="py-5 px-3 ">
       <h2 className="text-lg font-bold text-[#404145]">{shortTitle}</h2>
          <span className="text-base text-[#74767e]">
            {shortInfo}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GuidelineCard;
