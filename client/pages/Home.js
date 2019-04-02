import React, { Component } from 'react';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import './App.css';
import TotalWrapper from './components/TotalWrapper';


class App extends Component {
  render() {
    return (
      <div>
      <Nav></Nav>
      <TotalWrapper></TotalWrapper>
      {/* <Header></Header>
      <Body></Body>
      <Login></Login>
      <NEO></NEO>
      <News></News> */}
      <Footer></Footer>
      </div>
    );
  }
}

export default App;