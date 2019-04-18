import React from 'react';
import './App.scss';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';


const App = () => {
  return (
    <main className="app-wrapper">
      <Header />
      <Main />
      <Footer />
    </main>
  )
};

export default App;