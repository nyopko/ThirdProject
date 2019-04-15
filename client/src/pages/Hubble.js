import React, { Component } from 'react';
import Header from '../components/Header';
import HubbleContent from '../components/HubbleContent';
import Footer from '../components/Footer';



class App extends Component {
  render() {
    return (
      <div className="hubblePage">
      <Header />
      <HubbleContent />
      <Footer />
      </div>
    );
  }
}

export default App;