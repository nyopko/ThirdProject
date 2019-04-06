import React, { Component } from 'react';
import Header from '../components/Header';
import ResourcesContent from '../components/ResourcesContent/';


class App extends Component {
    render() {
      return (
        <div className="resourcesPage">
        <Header />
        <ResourcesContent />
        </div>
      );
    }
  }

export default App;