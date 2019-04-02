import React from 'react';
import './style.css';
import Header from '../Header';
import Mars from '../Mars';
import Planets from '../Planets';
import Hubble from '../Hubble';
import NEO from '../NEO'

function Wrapper() {
  return (
      <div className="bodyWrapper">
      <Header></Header>
      <Mars></Mars>
      <Planets></Planets>
      <Hubble></Hubble>
      <NEO></NEO>

            </div>
            );
}

export default Wrapper;