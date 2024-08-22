import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Company Logo" />
          <p>
            Our journey started with three friends with a shared vision. It was simple - introduce people to real good coffee. Today, we’re making high-quality, freshly roasted coffee accessible to everyone with our exclusive products.
          </p>
          <div className="footer-social-icons">
            <button className="social-button" aria-label="Facebook">
              <img src={assets.facebook_icon} alt="Facebook Icon" />
            </button>
            <button className="social-button" aria-label="Twitter">
              <img src={assets.twitter_icon} alt="Twitter Icon" />
            </button>
            <button className="social-button" aria-label="LinkedIn">
              <img src={assets.linkedin_icon} alt="LinkedIn Icon" />
            </button>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-30-369-8976</li>
            <li><a href="mailto:contact@coffee.com">contact@coffee.com</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>
        &copy; 2024 Coffee.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
