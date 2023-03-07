import React from "react";
import { Link } from "react-router-dom";

const Nogigs = () => {
  return (
    <div className="text-4xl py-10 text-center">
      <p className=" py-10  font-bold">No Gigs Found</p>
      <Link to="/">
        <button class="group rounded-2xl h-12 w-48 bg-green-500 font-bold text-lg text-white relative overflow-hidden">
          Back to Home
          <div class="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
        </button>
      </Link>
    </div>
  );
};

export default Nogigs;
