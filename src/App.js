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
   
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          
          </Routes>
      </Router>

    </div>
  );
}

export default App;
