import React from 'react';

const GeneralInfo = () => {
  return (
    <section className="general-info-container">
      <article className="main-logo-container">
        <img className="primary-logo" src="./assets/Exit_Plan-Logo.svg" alt="primary exit plan logo"/>
      </article>
      <article className="left-container">
        <h3 className="left-header">WHAT IS EXIT PLAN</h3>
        <p className="lead-text">
          Coming out in a hostile environment is hard. When a member of a family comes out as LBGT or a member of a religious cult decides they want to leave, they can en up feeling like they've lost everything -- their family, their friends, their support structures, and financial support. 
        </p>
        <p className="secondary-text">
          With chat articles and resources Exit Plan is here to help!
        </p>
      </article>
      <article className="right-container">
      </article>
    </section>
  ); 
}

export default GeneralInfo; 