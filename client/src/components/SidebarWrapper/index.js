import React from 'react';
import './style.css';
import NEO from '../NEO';
import DailyWrapper from '../DailyWrapper';

function SidebarWrapper() {
  return (
      <div className="sidebarWrapper">
      <NEO />
      <DailyWrapper />
      </div>
            );
}

export default SidebarWrapper;