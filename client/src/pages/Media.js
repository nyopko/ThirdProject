import React, { Component } from 'react';
import Header from '../components/Header';
import MediaContent from '../components/MediaContent';



class App extends Component {
  render() {
    return (
      <div className="mediaPage">
      <Header />
      <MediaContent />
      </div>
    );
  }
}

export default App;