import {React,useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Error from './Components/Error';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import VideoList from './Components/VideoList';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  const [videos,setVideos]= useState([])
  const getVideos = ()=> {
 fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}/video`)
    .then((response) => response.json())
    .then((response) => console.log(response))
  }
    
 

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
