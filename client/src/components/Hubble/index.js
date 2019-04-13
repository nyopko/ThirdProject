import React from 'react';
import './style.css';

function Hubble() {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card-panel">
          <div className="row">
            <div className="col s4 m2">
              <img id="homePlanet" src="https://i.ytimg.com/vi/libKVRa01L8/maxresdefault.jpg" alt="rover" className="responsive-img" />
            </div>
            <div className="col s8 m10">
              <h4>NASA Image and Video Search</h4>
              <p>This page can be used to search and download images and videos from NASA's extensive database of Space related content.</p>
              <p> <a href="/media"> To search the video and image library click here. </a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
            );
}

export default Hubble;