import React, { Component } from 'react';
import RoverWrapper from '../components/RoverWrapper';
import Footer from '../components/Footer';


class App extends Component {
  render() {
    return (
      <div className="roverPage">
        <div className="main">
          <div className="row">
            <div className="col s12 m9">
              <div className="row">
                <div className="col s12">
                  <div className="card-panel">
                    <h2 className="center-align">Mars Rover Pictures</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <RoverWrapper />
        <Footer />
      </div>
    );
  }
}

export default App;