import {React,useState, useEffect } from "react";
import YouTube from "react-youtube";


function VideoList() {

<<<<<<< HEAD
=======
  const [videos, setVideos]= useState([])

  const getVideos = ()=> {
 fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}/video`)
    .then((response) => response.json())
    .then((response) => {
        getVideos(response);
      });
  };
    
 useEffect(() =>{
   getVideos();
 }, []);

>>>>>>> d7f7dde6bec0bc88080d713215df8ca3bc27f0a6


  return (
    <div>
    {videos.map((video) => <YouTube videoId={video.id.videoId}/>)}
    VideoList</div>
  )
}

export default VideoList