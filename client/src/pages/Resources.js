import React, { Component } from 'react';
import ResourcesContent from '../components/ResourcesContent/';
import Footer from '../components/Footer';


class App extends Component {
    render() {
      return (
        <div className="resourcesPage">
        <div className="main">
          <div className="row">
            <div className="col s12 m9">
              <div className="row">
                <div className="col s12">
                  <div className="card-panel">
                    <h2 className="center-align">Resources</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ResourcesContent />
        <Footer />
        </div>
      );
    }
  }

export default App;