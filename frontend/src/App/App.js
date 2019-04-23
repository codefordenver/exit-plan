import React from 'react';
import './App.scss';
import Header from '../Header/Header.js';
import GeneralInfo from '../GeneralInfo/GeneralInfo.js'; 
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';


const App = () => {
  return (
    <main className="app-wrapper">
      <Header />
      <GeneralInfo />
      <Main />
      <Footer />
    </main>
  )
};

export default App;