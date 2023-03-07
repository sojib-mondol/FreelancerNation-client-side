import { useQuery } from "@tanstack/react-query";
import React from "react";
import LoginSkeleton from "../Shared/Skeleton/LoginSkeleton";
import Gigcard from "./Gigcard";

const ShowGigs = () => {
  const { data: gigs = [], isLoading } = useQuery({
    queryKey: ["gigs"],
    queryFn: async () => {
      const res = await fetch(
        "https://freelancer-nation-backend.vercel.app/sellerGigAll"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <LoginSkeleton></LoginSkeleton>;
  }

  return (
    <div className="bg-gray-100 pt-10 pb-16 px-10">
      <h2 className="text-3xl font-bold">All Gigs are here</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
        {gigs && gigs?.map((g, i) => <Gigcard gig={g} key={i}></Gigcard>)}
      </div>
    </div>
  );
};

export default ShowGigs;
