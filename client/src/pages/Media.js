import React, { Component } from 'react';
import Header from '../components/Header';
import MediaWrapper from '../components/MediaWrapper';
import SearchForm from '../components/SearchForm';



class App extends Component {
  render() {
    return (
      <div className="mediaPage">
      <MediaWrapper />
      </div>
    );
  }
}

export default App;