import React from 'react';
import './style.css';
import CuriosityWrapper from '../CuriosityWrapper';
import SpiritWrapper from '../SpiritWrapper';
import OpportunityWrapper from '../OpportunityWrapper';


function RoverWrapper() {
  return (
      <div className="roverWrapper">
           <CuriosityWrapper />
           <SpiritWrapper />
           <OpportunityWrapper />
            </div>
            );
}

export default RoverWrapper;