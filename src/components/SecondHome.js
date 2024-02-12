import React from "react";
import { NavLink } from "react-router-dom";
import "./Styles/Home.css";
import "./Styles/SecondHome.css";
function SecondHome() {
  return (
    <div className="Secondry_bar">
      <div className="secondry_bar_container">
        <div className="bar_items">
          <NavLink to="/" className="item">
            All
          </NavLink>
        </div>
        <div className="bar_items">
          <NavLink to="/search" className="item">
            Trending Now
          </NavLink>
        </div>
        <div className="bar_items">
          <NavLink to="/" className="item">
            Old Songs
          </NavLink>
        </div>
        <div className="bar_items">
          <NavLink to="/" className="item">
            New Songs
          </NavLink>
        </div>
        <div className="bar_items">
          <NavLink to="/" className="item">
            Moods & Genre
          </NavLink>
        </div>
        <div className="bar_items">
          <NavLink to="/" className="item">
            Top Albums
          </NavLink>
        </div>
        <div className="bar_items">
          <NavLink to="/" className="item">
            Top Artists
          </NavLink>
        </div>
        <div className="bar_items">
          <NavLink to="/" className="item">
            Top Playlists
          </NavLink>
        </div>

        <div className="bar_items">
          <NavLink to="/" className="item">
            <h1> Podcast</h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SecondHome;
