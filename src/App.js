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
  return (
    <div className="App">
        <Navbar setSearch={setSearch} setMaxResult={setMaxResult}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos" element={<VideoList videos={videos}/>}/>
          <Route path="/videos/:id" element={<VideoCard/>}/>
        </Routes>
    </div>
  );
}

export default App;
