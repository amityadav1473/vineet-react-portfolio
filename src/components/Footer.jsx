import React from 'react';
import {
  ArrowUp,
  Mail,
  Phone
} from 'lucide-react';

import { profile, navigation } from '../data/portfolioData';

import './Footer.css';

function Footer() {

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* FOOTER TOP */}

        <div className="footer-top">

          <div className="footer-about">

            <a href="#home" className="footer-logo">
              <span className="footer-logo-icon">VK</span>
              <span>{profile.name}.</span>
            </a>

            <p>
              {profile.role}
            </p>

            <p className="footer-description">
              Dedicated to providing excellent hospitality
              services and creating memorable guest experiences.
            </p>

          </div>


          {/* QUICK LINKS */}

          <div className="footer-links">

            <h3>Quick Links</h3>

            {navigation.map((item) => (

              <a href={item.link} key={item.link}>
                {item.name}
              </a>

            ))}

          </div>


          {/* CONTACT */}

          <div className="footer-contact">

            <h3>Contact Information</h3>

            <a href={`mailto:${profile.email}`}>
              <Mail size={17} />
              {profile.email}
            </a>

            <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>
              <Phone size={17} />
              {profile.phone}
            </a>

          </div>

        </div>


        {/* FOOTER BOTTOM */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} {profile.name}.
            All Rights Reserved.
          </p>

          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp size={20} />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
