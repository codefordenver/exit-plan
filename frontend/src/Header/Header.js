import React from 'react';
import Nav from '../Nav/Nav.js';
import './Header.scss'; 

const Header = () => {
  return (
    <header>
      <article className="header-logo-container">
        <img className="header-logo" src="./assets/Exit_Plan-SecondaryLogo.svg" alt="exit plan logo"/>
      </article>
      <Nav/>
    </header>
  )
};

export default Header;