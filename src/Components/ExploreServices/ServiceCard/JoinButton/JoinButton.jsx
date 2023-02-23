import React from "react";

const JoinButton = () => {
  return (
    <div>
      <button className='group relative border-green-500 h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow'>
        <div className='absolute inset-0 w-3 bg-green-500 transition-all duration-[250ms] ease-out group-hover:w-full'></div>
        <span className='relative text-black group-hover:text-white font-roboto'>
          Join
        </span>
      </button>
    </div>
  );
};

export default JoinButton;
