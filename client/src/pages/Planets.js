import React, { Component } from 'react';
import PlanetContent from '../components/PlanetContent';

class App extends Component {
  render() {
    return (
      <div className="planetsPage">
      <div className="main">
          <div className="row">
            <div className="col s12 m9">
              <div className="row">
                <div className="col s12">
                  <div className="card-panel">
                    <h2 className="center-align">Interactive Solar System Map</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <PlanetContent />
      </div>
    );
  }
}

export default App;