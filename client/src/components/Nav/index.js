import React from "react";
import "./style.css";

function Nav() {
    return <div className="nav">
        <nav>
            <div className="nav-wrapper">
                <a href="google.com" className="brand-logo">Space!</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="Home.js">Home</a></li>
        <li><a href="Hubble.js">Hubble</a></li>
        <li><a href="Media.js">Media</a></li>
        <li><a href="Planets.js">Planets</a></li>
        <li><a href="Rover.js">Rover</a></li>
      </ul>
            </div>
        </nav>
    </div>
}

export default Nav;