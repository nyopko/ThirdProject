import React from 'react';
import './style.css';
import CuriosityContent from '../CuriosityContent';
import SpiritContent from "../SpiritContent"
import CuriosityWrapper from '../CuriosityWrapper';
import SpiritWrapper from '../SpiritWrapper';


function RoverWrapper() {
  return (
      <div className="roverWrapper">
           <CuriosityWrapper />
           <SpiritWrapper />
            </div>
            );
}

export default RoverWrapper;