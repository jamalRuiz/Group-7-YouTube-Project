import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Search from "./Search";
import "./Navbar.css"

function Navbar({ setSearch, setMaxResult }) {
  return (
    <header className="navbar">
      <nav>
        <h1>YouTube</h1>
        <h2>
          <Link to="/">Home</Link>
        </h2>
        <h2>
          <Link to="/about">About</Link>
        </h2>
      </nav>

      <aside>
        <Search setSearch={setSearch} setMaxresult={setMaxResult} />
      </aside>
    </header>
  );

}

export default Navbar;
