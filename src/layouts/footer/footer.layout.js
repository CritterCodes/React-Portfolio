// src/components/footer/footer.component.js
import React from 'react';
import './footer.layout.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-columns">
        <div className="footer-column">
          <h3>Location</h3>
          <p>Nightshade Tattoo and Oddity</p>
          <p>2301 S 56th St., Suite 110</p>
          <p>Fort Smith, Arkansas 72903</p>
          <p>(479) 353-8361</p>
          <p><a href="mailto:austinanderson777@gmail.com">austinanderson777@gmail.com</a></p>
          <p><a href="https://www.google.com/maps/place/2301+S+56th+St+Fort+Smith+AR" target="_blank" rel="noopener noreferrer">Get directions</a></p>
        </div>

        <div className="footer-column">
          <h3>Hours</h3>
          <p><strong>Monday</strong>: Closed</p>
          <p><strong>Tuesday</strong>: 11:00 am - 7:00 pm</p>
          <p><strong>Wednesday</strong>: 11:00 am - 7:00 pm</p>
          <p><strong>Thursday</strong>: 11:00 am - 7:00 pm</p>
          <p><strong>Friday</strong>: 11:00 am - 5:00 pm</p>
          <p><strong>Saturday</strong>: 11:00 am - 5:00 pm</p>
          <p><strong>Sunday</strong>: Closed</p>
        </div>

        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="footer-socials">
            <a href="https://www.facebook.com/austin.anderson.39" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com/faamo_" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Austin Anderson Tattoo's. All rights reserved.</p>
        <p>Read our <a href="/policies">Policies</a> {/* Add Policies link here */}</p>
        <p>Built by <a href="https://www.crittercodes.com" target="_blank" rel="noopener noreferrer">CritterCodes</a></p>
      </div>
    </footer>
  );
};

export default Footer;
