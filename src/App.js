import logo from './logo.svg';
import './App.css';
import Error from './Components/Error';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import VideoList from './Components/VideoList';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {

  fetch(
    `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`
    .then((response) => response.json())
  );

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          
          </Routes>
      </Router>

    </div>
  );
}

export default App;
