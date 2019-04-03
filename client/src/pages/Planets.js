import React, { Component } from 'react';
import Header from '../components/Header';
import PlanetContent from '../components/PlanetContent';



class App extends Component {
  render() {
    return (
      <div className="planetsPage">
      <Header />
      <PlanetContent />
      </div>
    );
  }
}

export default App;