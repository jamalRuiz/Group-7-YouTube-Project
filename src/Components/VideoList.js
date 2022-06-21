import { React, useState, useEffect } from "react";
import YouTube from "react-youtube";
import "./VideoList.css";

function VideoList({ videos }) {
  return (
    <div>
      {videos.map((video) => {
        return (
          <>
            <h3>{video.snippet.title}</h3>
            <h4>{video.snippet.description}</h4>
            <YouTube videoId={video.id.videoId} />;
          </>
        );
      })}
    </div>
  );
}

export default VideoList;
