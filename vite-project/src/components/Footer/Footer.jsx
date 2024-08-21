import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Our journey started with three friends with a shared vision. It was simple- introduce people to real good coffee. Today, we’re making high-quality, freshly roasted coffee accessible to everyone with our exclusive products.
          </p>
          <div className="footer-social-icons">
            <button className="social-button">
              <img src={assets.facebook_icon} alt="" />
            </button>
            <button className="social-button">
              <img src={assets.twitter_icon} alt="" />
            </button>
            <button className="social-button">
              <img src={assets.linkedin_icon} alt="" />
            </button>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
          <li><a href="#">Home</a></li>
          <li><a href="/about">About us</a></li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-30-369-8976</li>
            <li>contact@coffee.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>
        Copyright-2024 Coffee.com-All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;