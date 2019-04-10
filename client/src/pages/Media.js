import React, { Component } from 'react';
import Header from '../components/Header';
import MediaWrapper from '../components/MediaWrapper';



class App extends Component {
  render() {
    return (
      <div className="mediaPage">
      <Header />
      <MediaWrapper />
      </div>
    );
  }
}

export default App;