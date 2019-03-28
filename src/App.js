import React, { Component } from 'react';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Nav></Nav>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
      </div>
    );
  }
}

export default App;
