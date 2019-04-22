import React from 'react';
import './Footer.scss'; 

const Footer = () => {
  return (
    <footer>
      <div className="footer-location">
        <h3>Exit Plan</h3>
        <hr></hr>
        <br />
        <p>123 W 12th Street,</p>
        <p>Denver, CO 12345</p>
      </div>
      <div className="footer-links">
        <h3>Useful Links</h3>
        <hr></hr>
        <a>Customer Support</a>
        <br/>
        <a>Emergency Resources</a>
        <br/>
        <a>Directory</a>
      </div>
    </footer>
  )
};

export default Footer;