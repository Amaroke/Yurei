import React from "react";
import ReactPlayer from "react-player";
import thresh from "../../assets/videos/thresh.mp4";

function Video() {
  return (
    <div className="player-wrapper">
      <div className="player">
        <ReactPlayer
          url={thresh}
          playing
          muted
          loop
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

export default Video;
