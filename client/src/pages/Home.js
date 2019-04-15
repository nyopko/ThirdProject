import React, { Component } from 'react';
import TotalWrapper from '../components/TotalWrapper';
import Footer from '../components/Footer'



class App extends Component {
  render() {
    return (
      <div className="homePage">
      <TotalWrapper />
      <Footer />
      </div>
    );
  }
}

export default App;