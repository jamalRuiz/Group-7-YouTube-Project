import { React, useState, useEffect } from "react";
import YouTube from "react-youtube";
import {Link} from "react-router-dom"
import "./VideoList.css";

function VideoList({ videos }) {
  return (
    <div>
      {videos.map((video) => {
        return (
          <>
            <h3>{video.snippet.title}</h3>
            <h4>{video.snippet.description}</h4>
            <Link to={`/videos/${video.id.videoId}`}> <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title}/></Link>;
          </>
        );
      })}
    </div>
  );
}

export default VideoList;
