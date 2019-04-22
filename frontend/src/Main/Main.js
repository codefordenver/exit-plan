import React from 'react';
import './Main.scss'; 
import Hero from '../Hero/Hero.js';
import Intro from '../Intro/Intro.js';
import Link from '../Link/Link.js';
import Email from '../Email/Email.js';


const Main = () => {
  return (
    <main>
      <Hero />
      <Intro />
      <Link />
      <Email />
    </main>
  )
};

export default Main;