import React from "react";
import demo from "../../../../assets/demo.mp4"

const Player = () => {
  return (
    <div className="border border-green-400 border-spacing-1">
      <video width='600' controls autoPlay>
        <source src={`${demo}`} type='video/mp4' />
        <source src={`${demo}`} type='video/mp4' />
        Your browser does not support HTML video.
      </video>
    </div>
  );
};

export default Player;
