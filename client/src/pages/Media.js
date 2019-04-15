import React, { Component } from 'react';
import MediaWrapper from '../components/MediaWrapper';
import Footer from '../components/Footer';




class App extends Component {
  render() {
    return (
      <div className="mediaPage">
      <MediaWrapper />
      <Footer />
      </div>
    );
  }
}

export default App;