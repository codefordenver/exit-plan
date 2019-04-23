import React from 'react';
import './GeneralInfo.scss'; 

const GeneralInfo = () => {
  return (
    <section className="general-info-container">
      <object className="primary-logo" data="./assets/Exit_Plan-Logo.svg" alt="primary exit plan logo" height="1000" width="1000">
      </object>
      <div role="secondary container for general info" className="text-video-container">
          <article className="left-container">
          <h1>WHAT IS EXIT PLAN?</h1>
          <p className="lead-text">
          Coming out in a hostile environment is hard. When a member of a family comes out as LBGT or a member of a religious cult decides they want to leave, they can en up feeling like they've lost everything -- their family, their friends, their support structures, and financial support. 
          </p>
          <p className="secondary-text">
          With chat articles and resources Exit Plan is here to help!
          </p>
        </article>
        <article className="right-container">
        </article>
      </div>
    </section>
  ); 
}

export default GeneralInfo; 