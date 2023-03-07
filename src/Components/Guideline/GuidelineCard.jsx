import React from "react";
import { Link } from "react-router-dom";

const GuidelineCard = ({ data }) => {
  const { id, image, title, info } = data;
  const shortTitle = title?.slice(0, 35)
  const shortInfo = info?.slice(0, 40)
  return (
    <div>
      <div className="w-full overflow-hidden bg-white rounded-lg">
        <img
          className="object-cover w-full h-56"
          src={image}
          alt="avatar"
        />

        <div className="py-5 px-3 ">
          <Link to={`/freelancer-guide/${id}`}>
            <p className="text-lg font-bold text-[#404145]">{shortTitle}</p>
            <span className="text-base text-[#74767e]">
              {shortInfo}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuidelineCard;
