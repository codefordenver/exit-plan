import React from 'react';
import './App.scss';
import Header from '../Header/Header.js';
import GeneralInfo from '../GeneralInfo/GeneralInfo.js'; 

const App = () => {
  return (
    <main className="app-wrapper">
      <Header />
      <GeneralInfo />
    </main>
  )
};

export default App;