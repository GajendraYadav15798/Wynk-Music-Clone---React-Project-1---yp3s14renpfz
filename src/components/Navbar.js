import React from "react";
import "./Styles/Navbar.css";
import { Link } from "react-router-dom";
import Signup from "./Signup";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="subdivision">
        <div className="logo-container">
          <Link to="/">
            <img
              src="https://img.icons8.com/color-glass/144/wynk-music.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="search-container">
          <input type="search" placeholder="serach" />
        </div>
        <div className="signup">
          <Link to="/Signup">Signup</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
