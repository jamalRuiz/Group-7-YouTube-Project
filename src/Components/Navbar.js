import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Search from "./Search";

function Navbar({ setSearch, setMaxResult }) {
  return (
    <header>
      <nav className="navBar">
        <h1>YouYube</h1>
        <h2>
          <Link to="/">Home</Link>
        </h2>
        <h2>
          <Link to="/about"></Link>
        </h2>
      </nav>

      <aside>
        <Search setSearch={setSearch} setMaxresult={setMaxResult} />
      </aside>
    </header>
  );

}

export default Navbar;
