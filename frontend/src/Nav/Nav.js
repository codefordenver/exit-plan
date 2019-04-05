import React from 'react'; 

const navFilters = ['HOME', 'ABOUT', 'RESOURCES', 'ARTICLES', 'CONTACT']

export const Nav = () => {
  const filterList = navFilters.map(filter => (<li>filter</li>))
  return(
    <ul>
      {filterList}
    </ul>
  )
}