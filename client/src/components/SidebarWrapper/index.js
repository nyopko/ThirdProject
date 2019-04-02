import React from 'react';
import './style.css';
import NEO from '../NEO';
import Daily from '../Daily';

function SidebarWrapper() {
  return (
      <div className="sidebarWrapper">
        <NEO></NEO>
        <Daily></Daily>
            </div>
            );
}

export default SidebarWrapper;