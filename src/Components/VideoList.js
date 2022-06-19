import {React,useState, useEffect } from "react";
import YouTube from "react-youtube";


function VideoList() {



  return (
    <div>
    {videos.map((video) => <YouTube videoId={video.id.videoId}/>)}
    VideoList</div>
  )
}

export default VideoList