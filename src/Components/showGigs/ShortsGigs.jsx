import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import LoginSkeleton from "../Shared/Skeleton/LoginSkeleton";
import Gigcard from "./Gigcard";

const ShortsGigs = () => {
  const { data: gigs = [], isLoading } = useQuery({
    queryKey: ["gigs"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/sellerGigShort");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <LoginSkeleton></LoginSkeleton>;
  }

  return (
    <div className="px-16 mt-20 pb-10 bg-gray-100">
      <h2 className="text-4xl py-10 font-bold">All Gigs are here</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {gigs && gigs?.map((g, i) => <Gigcard gig={g} key={i}></Gigcard>)}
      </div>
      <div className="text-center animate-bounce mt-16">
        <Link to="/allGigs">
          <button class="group rounded-2xl h-12 w-48 bg-yellow-300 font-bold text-lg text-black  relative overflow-hidden">
            Show All
            <div class="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShortsGigs;
