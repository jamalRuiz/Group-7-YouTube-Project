
import {React,useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Error from './Components/Error';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import VideoList from './Components/VideoList';
import Search from "./Components/Search";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import YouTube from "react-youtube";
import VideoCard from "./Components/VideoCard";

function App() {

  const [videos, setVideos] = useState([])
  const [search, setSearch] = useState('')
  const [maxResult, setMaxResult] = useState(4)

  useEffect(()=> {
  
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&q=${search}&maxResults=${maxResult}&part=snippet`
    )
      .then((responce) => responce.json())
      .then ((data) => setVideos(data.items))
    }, [search, maxResult])


  return (
      <Router>
    <div className="App">
        <Navbar setSearch={setSearch} setMaxResult={setMaxResult}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos" element={<VideoList videos={videos}/>}/>
          <Route path="/videos/:id" element={<VideoCard/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
    </div>
      </Router>
  );
}

export default App;

// you have to npm install react-youtube for youTube packages then import to VideoList