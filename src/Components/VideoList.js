import {React,useState, useEffect } from "react";
import YouTube from "react-youtube";
import "./VideoList.css"
import VideoCard from "./VideoCard";

function VideoList({videos}) {

  return (
    <div>
    {videos.map((video) => <YouTube videoId={video.id.videoId}/>)}

    VideoList</div>
  )
}

export default VideoList