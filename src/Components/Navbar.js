import React from 'react'
import {Link } from "react-router-dom"
import Search from './Search'
import "./Navbar.css"
function Navbar() {
  return (
    <div className='navbar'> 
    <h1>YouTube</h1>
    <Search/>
    <br></br>
    <Link to="/"><button>Home</button></Link>
    <Link to="/about"><button>About</button></Link>
    </div>
  )
}

export default Navbar