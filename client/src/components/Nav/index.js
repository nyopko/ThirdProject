import React from "react";
import "./style.css";


function Nav() {
    return <div className="nav">
        <nav>
            <div className="nav-wrapper">
                <a href="google.com" className="brand-logo">Space!</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/home">Home</a></li>
        <li><a href="/hubble">Hubble</a></li>
        <li><a href="/media">Media</a></li>
        <li><a href="/planets">Planets</a></li>
        <li><a href="/rover">Rover</a></li>
        <li><a href="/resources">Resources</a></li>
      </ul>
      
            </div>
        </nav>
    </div>
}



export default Nav;
