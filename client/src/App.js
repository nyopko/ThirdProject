import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home.js";
import Planets from "./pages/Planets.js";
import Footer from "./components/Footer";
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/planets" component={Planets} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
