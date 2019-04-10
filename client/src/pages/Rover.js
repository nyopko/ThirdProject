import React, { Component } from 'react';
import Header from '../components/Header';
import RoverWrapper from '../components/RoverWrapper';



class App extends Component {
  render() {
    return (
      <div className="roverPage">
      <Header />
      <RoverWrapper />
      </div>
    );
  }
}

export default App;