import React from 'react'
import {Link } from "react-router-dom"

function Navbar() {
  return (
    <div> 
    <h1>YouTube</h1>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    Navbar</div>
  )
}

export default Navbar