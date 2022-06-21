import React from "react";
import "./VideoCard.css";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

function VideoCard({videos}) {
  const {id} = useParams();
  debugger;

const vid = videos.find(video => video.id.videoId === id)

// if(!vid){
//   return <Error/>
// }

const handleSubmit = (event) => {
event.preventDefault()

}

  return (<div>
    <YouTube videoId={id} />
  
    <form>
      <input type="text" placeholder="Name"/>
      <input type="text" placeholder="Comment"/>
      <button type="submit">Submit</button>
    </form>
    </div>)
}

export default VideoCard;
