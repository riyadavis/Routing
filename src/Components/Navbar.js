import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <nav className="navbar">
      <Link style={styleLink} to="/">
        <h1>Silent Thoughts</h1>
      </Link>
      <ul className="nav-link">
        <Link style={styleLink} to="/">
          <li>Home</li>
        </Link>
        <Link style={styleLink} to="/about">
          <li>About</li>
        </Link>
        <Link style={styleLink} to="/cards">
          <li>Cards</li>
        </Link>
        <li>
          <input
            type="search"
            placeholder="search"
            onInput={e => setInputValue(e.target.value)}
          />
        </li>
        <Link style={styleLink} to={`/search/${inputValue}`}>
          <li>Search</li>
        </Link>
      </ul>
    </nav>
  );
};

const styleLink = {
  color: "rgb(250, 191, 83)",
  textDecoration: "none"
};
export default NavBar;
