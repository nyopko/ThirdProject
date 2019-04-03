import React, { Component } from 'react';
import Header from '../components/Header';
import RoverContent from '../components/RoverContent';



class App extends Component {
  render() {
    return (
      <div className="roverPage">
      <Header />
      <RoverContent />
      </div>
    );
  }
}

export default App;