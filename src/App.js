import React, { Component } from 'react';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Body from "./components/Body";
import Login from "./components/Login";
import NEO from './components/NEO';
import News from './components/NEO';
import Footer from "./components/Footer";
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
      <Nav></Nav>
      <Header></Header>
      <Body></Body>
      <Login></Login>
      <NEO></NEO>
      <News></News>
      <Footer></Footer>
      </div>
    );
  }
}

export default App;
