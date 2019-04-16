import React from 'react';
import Nav from '../Nav/Nav.js';
import './Header.scss'; 

const Header = () => {
  return (
    <header>
      <div role="logo-container" className="header-logo-container">
        <img className="header-logo" src="./assets/Exit_Plan-SecondaryLogo.svg" alt="exit plan logo"/>
      </div>
      <Nav/>
    </header>
  )
};

export default Header;