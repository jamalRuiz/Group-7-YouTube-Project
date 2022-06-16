import React from 'react'
import {Link } from "react-router-dom"
import Search from './Search'

function Navbar() {
  return (
    <div> 
    <h1>YouTube</h1>
    <Search/>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    Navbar</div>
  )
}

export default Navbar