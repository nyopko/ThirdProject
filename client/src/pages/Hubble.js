import React, { Component } from 'react';
import Header from '../components/Header';
import HubbleContent from '../components/HubbleContent';



class App extends Component {
  render() {
    return (
      <div className="hubblePage">
      <Header />
      <HubbleContent />
      </div>
    );
  }
}

export default App;