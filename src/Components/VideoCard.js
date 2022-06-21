import React from "react";
import "./VideoCard.css";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

function VideoCard() {
  const {id} = useParams();
  debugger;

  return (<div>
    <YouTube videoId={id} />
    </div>)
}

export default VideoCard;
