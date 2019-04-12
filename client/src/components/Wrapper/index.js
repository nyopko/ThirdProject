import React from 'react';
import './style.css';
import Header from '../Header';
import Mars from '../Mars';
import Planets from '../Planets';

function Wrapper() {
  return (
      <div className="body">
      <Mars></Mars>
      <Planets />
            </div>
            );
}

export default Wrapper;