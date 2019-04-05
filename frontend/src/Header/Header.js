import React from 'react';
import Nav from '../Nav/Nav.js';

const Header = () => {
  return (
    <header>
      <div className="logo-container" role="logo container">
        <img src="public/images/mock-logo.png" alt="Exit Plan Logo"/>
      </div>
      <Nav/>
    </header>
  )
};

export default Header;