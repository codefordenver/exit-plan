import React from 'react';
import './Footer.scss'; 

const Footer = () => {
  return (
    <footer>
      <div className="footer-location">
        <h3>Exit Plan</h3>
        <p>123 W 12th Street,</p>
        <p>Denver, CO 12345</p>
      </div>
      <div className="footer-links">
        <h3>Useful Links</h3>
        <a>Customer Support</a>
        <a>Emergency Resources</a>
        <a>Directory</a>
      </div>
    </footer>
  )
};

export default Footer;