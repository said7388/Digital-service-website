import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer p-md-4'>
      <Container className=' row row-cols-3 container'>
        <div className='col-4'>
          {/* Footer logo and description here */}
          <img src='https://www.linkpicture.com/q/logo_21.png' alt='' />
          <p className='footer-text'>
            Build skills with courses, certificates, and degrees online from
            world-class universities and companies. World-class training and
            development programs developed by top universities.
            People learning for professional development report career benefits
            like getting a promotion, a raise, or starting a new career.
          </p>
        </div>
        <div className='col-2'>
          {/* Footer Important Anchor Link  */}
          <p className='footer-title'>Resources</p>
          <p>
            <NavLink to='/courses'>Blogs</NavLink>
          </p>
          <p>
            <NavLink to='/about'>About Us</NavLink>
          </p>
          <p>
            <NavLink to='link'>FAQ</NavLink>
          </p>
          <p>
            <NavLink to='link'>Contact Us</NavLink>
          </p>
        </div>
        <div className='col-3'>
          {/* Footer Important Anchor Link  */}
          <p className='footer-title'>Legal Stuff</p>
          <p>
            <NavLink to='/courses'>Disclaimer</NavLink>
          </p>
          <p>
            <NavLink to='/about'>Financing </NavLink>
          </p>
          <p>
            <NavLink to='link'>Privacy Policy</NavLink>
          </p>
          <p>
            <NavLink to='link'>Terms of Service</NavLink>
          </p>
        </div>
        <div className='col-3'>
          {/* Our Fake Adresses */}
          <p className='footer-title'>Our Contact</p>
          <p>
            <i className='fas fa-map-marker-alt'></i> 350 Avenue, New York -
            10001
          </p>
          <p>
            <i className='fas fa-envelope-open-text'></i> info@example.com
          </p>
          <p>
            <i className='fas fa-phone'></i> +8801834738881
          </p>
        </div>
      </Container>
      <hr />
      <p className="regular-text text-center">Made With Love By ABU SAID All Right Reserved 
</p>
    </div>
  );
};

export default Footer;
