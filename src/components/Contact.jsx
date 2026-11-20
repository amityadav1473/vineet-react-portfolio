import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send
} from 'lucide-react';

import { profile } from '../data/portfolioData';

import './Contact.css';

function Contact() {

  return (
    <section className="contact-section" id="contact">

      <div className="contact-container">

        {/* SECTION HEADING */}

        <div className="contact-heading">

          <p>LET'S CONNECT</p>

          <h2>
            Contact <span>Me</span>
          </h2>

          <div className="contact-line"></div>

          <p className="contact-description">
            Feel free to contact me for professional
            opportunities and other enquiries.
          </p>

        </div>


        {/* CONTACT CARDS */}

        <div className="contact-grid">

          {/* EMAIL */}

          <div className="contact-card">

            <div className="contact-icon">
              <Mail size={28} />
            </div>

            <h3>Email Address</h3>

            <p>{profile.email}</p>

            <a href={`mailto:${profile.email}`}>
              Send Email
              <Send size={16} />
            </a>

          </div>


          {/* PHONE */}

          <div className="contact-card">

            <div className="contact-icon">
              <Phone size={28} />
            </div>

            <h3>Phone Number</h3>

            <p>{profile.phone}</p>

            <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>
              Call Me
              <Phone size={16} />
            </a>

          </div>


          {/* LOCATION */}

          <div className="contact-card">

            <div className="contact-icon">
              <MapPin size={28} />
            </div>

            <h3>My Location</h3>

            <p>{profile.location}</p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Jiroli+Dor+Aligarh+Uttar+Pradesh"
              target="_blank"
              rel="noreferrer"
            >
              View Location
              <MapPin size={16} />
            </a>

          </div>

        </div>


        {/* BOTTOM MESSAGE */}

        <div className="contact-bottom">

          <h3>Thank You for Visiting My Portfolio!</h3>

          <p>
            I look forward to connecting with you.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Contact;
