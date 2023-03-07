import { useQuery } from "@tanstack/react-query";
import React from "react";
import LoginSkeleton from "../Shared/Skeleton/LoginSkeleton";
import Gigcard from "../showGigs/Gigcard";
import Nogigs from "./Nogigs";

const MusicAndAudio = () => {
  const { data: musicAudio = [], isLoading } = useQuery({
    queryKey: ["musicAudio"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/music-audio");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <LoginSkeleton></LoginSkeleton>;
  }
  if (musicAudio.length === 0) {
    return <Nogigs></Nogigs>;
  }
  return (
    <div className="bg-gray-100 pt-10 pb-16 px-10">
      <h2 className="text-3xl font-bold">Gigs From Music & Audio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
        {musicAudio &&
          musicAudio?.map((g, i) => <Gigcard gig={g} key={i}></Gigcard>)}
      </div>
    </div>
  );
};

export default MusicAndAudio;
