<<<<<<< HEAD
import { React, useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Error from "./Components/Error";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import VideoList from "./Components/VideoList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
=======
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
>>>>>>> d7f7dde6bec0bc88080d713215df8ca3bc27f0a6

// const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3/search"

// export async function getServerSideProps(){
//   const response = await fetch(`${YOUTUBE_API}?key=${process.env.REACT_APP_API_KEY}`)
//   const data = await response.json();
//   return {
//     props: {
//       data
//     }
//   }
// }
function App() {
<<<<<<< HEAD


  const [videos, setVideos] = useState([])
  const [search, setSearch] = useState('')
  const [maxResult, setMaxResult] = useState(4)

  useEffect(()=> {
  
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&q=${search}&maxResults=${maxResult}`
    )
      .then((responce) => responce.json())
      .then ((data) => setVideos(data.items))
    }, [search, maxResult])


  return (
=======
const URL = process.env.REACT_APP_API_KEY;
  const [videos,setVideos]= useState([])
    const getVideos = ()=> {
     fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${URL}`)
        .then((response) => response.json())
        .then(data => console.log(data))
      }

      useEffect(() =>{
        getVideos();
      }, []);
    return (
    <div className="App">
   
>>>>>>> d7f7dde6bec0bc88080d713215df8ca3bc27f0a6
      <Router>
    <div className="App">
        <Navbar setSearch={setSearch} setMaxResult={setMaxResult}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos" element={<VideoList videos={videos}/>}/>
        </Routes>
    </div>
      </Router>
  );
}

export default App;

// you have to npm install react-youtube for youTube packages then import to VideoList