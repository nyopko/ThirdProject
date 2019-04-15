import React, { Component } from 'react';
import MediaWrapper from '../components/MediaWrapper';



class App extends Component {
  state = {
    name: null,
    email: null,
    isLoggedIn: false
  }
  handleFavoriteClick = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="mediaPage">
      <MediaWrapper />
      </div>
    );
  }
}

export default App;