import React, { Component } from 'react';
import Header from '../components/Header';
import RoverWrapper from '../components/RoverWrapper';
import Login from '../components/Login';



class App extends Component {
  render() {
    return (
      <div className="roverPage">
      <Login />
      <Header />
      <RoverWrapper />
      </div>
    );
  }
}

export default App;