import React, {useState} from "react";
import "./VideoCard.css";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import Error from "../Components/Error"

function VideoCard({videos}) {
  const {id} = useParams();
  const [input, setInput] = useState("")
  const [input2, setInput2] = useState("")
  debugger;

const vid = videos.find((video) => video.id.videoId === id)
if(!vid){
  return <Error/>
}


const handleSubmit = (event) => {
event.preventDefault()
setInput("")
setInput2("")
}


  return (<div className="video">
    <YouTube videoId={id} />
  
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder="Name"/>
      <input type="text" onChange={(e) => setInput2(e.target.value)} value={input2} placeholder="Comment"/>
      <button type="submit">Submit</button>
    </form>
    </div>)
}

export default VideoCard;
