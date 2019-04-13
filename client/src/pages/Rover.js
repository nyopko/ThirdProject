import React, { Component } from 'react';
import Header from '../components/Header';
import RoverWrapper from '../components/RoverWrapper';


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
                        <h2 className="">Mars Rover Pictures</h2>
                    </div>
                </div>
            </div>
           </div>
          </div>
         </div>  
      
      <RoverWrapper />
      </div>
    );
  }
}

export default App;