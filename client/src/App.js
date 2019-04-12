/// Components import
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";



/// Stylesheet import 

import './App.css';

/// Pages imports 
import Home from "./pages/Home.js";
import Planets from "./pages/Planets.js";
import Rover from "./pages/Rover.js";
import Hubble from "./pages/Hubble.js";
import Media from "./pages/Media";
import Resources from "./pages/Resources";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/planets" component={Planets} />
            <Route exact path="/hubble" component={Hubble} />
            <Route exact path="/rover" component={Rover} />
            <Route exact path="/media" component={Media} />
            <Route exact path="/resources" component={Resources} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
