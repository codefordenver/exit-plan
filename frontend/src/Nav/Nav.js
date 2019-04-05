import React from 'react';

const navFilters = ['HOME', 'ABOUT', 'RESOURCES', 'ARTICLES', 'CONTACT'];

const Nav = () => {
  const filterList = navFilters.map(filter => (<li>filter</li>))
  return(
    <nav>
      <ul>
        { filterList }
      </ul>
    </nav>
  )
};

export default Nav;