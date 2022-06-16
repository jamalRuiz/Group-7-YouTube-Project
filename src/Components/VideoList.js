import {React,useState, useEffect } from "react";

// import React from 'react'

function VideoList() {

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



  return (
    <div>
    {videos.map(
      
    )}
    VideoList</div>
  )
}

export default VideoList