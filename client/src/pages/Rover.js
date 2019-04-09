import React, { Component } from 'react';
import Header from '../components/Header';
import RoverContent from '../components/CuriosityContent';
import RoverWrapper from '../components/CuriosityWrapper';
import SpiritWrapper from "../components/SpiritWrapper"



class App extends Component {
  render() {
    return (
      <div className="roverPage">
      <Header />
      <RoverWrapper />
      <SpiritWrapper />
      </div>
    );
  }
}

export default App;