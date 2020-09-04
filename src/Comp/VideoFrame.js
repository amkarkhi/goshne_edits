import React, { Component, useState } from "react";
import ReactPlayer from "react-player";
const VideoFrame = ({ source }) => {
  const [isPlaying, setisPlaying] = useState(false);

  ReactPlayer.canPlay(source) ? console.log("ok") : console.log("no");

  // const config ={file:{}}
  return (
    <div className="playerDiv">
      <ReactPlayer
        url={source}
        onReady={() => setisPlaying(true)}
        playing={isPlaying}
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
  
};
export default VideoFrame;
