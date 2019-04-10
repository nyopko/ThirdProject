import React from 'react';
import './style.css';
import Wrapper from '../Wrapper';
import SidebarWrapper from '../SidebarWrapper';
import NEOWrapper from '../NeoWrapper';

function TotalWrapper() {
  return (
      <div className="totalWrapper">
        <div className="bodyWrapper">
        <Wrapper></Wrapper>
        </div>
        <div className="sidebarWrapper">
        <SidebarWrapper></SidebarWrapper>
        </div>
        <NEOWrapper />
            </div>
            );
}

export default TotalWrapper;