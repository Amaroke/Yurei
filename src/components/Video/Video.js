import React from "react";
import ReactPlayer from "react-player";

function Video() {
    return (
    <div className="player-wrapper">
        <ReactPlayer url="https://www.youtube.com/watch?v=hQf2rwzsnFM" playing muted width="100%" height="92vh" className="player"/>
    </div>
    );
}

export default Video;