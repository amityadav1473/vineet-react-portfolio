import React from 'react';
import { User, MapPin, Mail, Phone, Briefcase } from 'lucide-react';

import { profile } from '../data/portfolioData';

import './About.css';

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* SECTION HEADING */}

        <div className="about-heading">
          <p>GET TO KNOW ME</p>
          <h2>About <span>Me</span></h2>
          <div className="about-line"></div>
        </div>


        {/* ABOUT CONTENT */}

        <div className="about-content">

          <div className="about-text">

            <h3>
              Professional Hospitality Associate
            </h3>

            <p>
              {profile.summary}
            </p>

            <p>
              I believe in maintaining a positive attitude,
              professional communication and teamwork.
              My goal is to create a comfortable and welcoming
              experience for every guest.
            </p>

          </div>


          {/* PERSONAL DETAILS */}

          <div className="about-details">

            <div className="about-detail-card">

              <div className="about-icon">
                <User size={22} />
              </div>

              <div>
                <span>Name</span>
                <h4>{profile.name}</h4>
              </div>

            </div>


            <div className="about-detail-card">

              <div className="about-icon">
                <Briefcase size={22} />
              </div>

              <div>
                <span>Profession</span>
                <h4>{profile.role}</h4>
              </div>

            </div>


            <div className="about-detail-card">

              <div className="about-icon">
                <Mail size={22} />
              </div>

              <div>
                <span>Email</span>
                <h4>{profile.email}</h4>
              </div>

            </div>


            <div className="about-detail-card">

              <div className="about-icon">
                <Phone size={22} />
              </div>

              <div>
                <span>Phone</span>
                <h4>{profile.phone}</h4>
              </div>

            </div>


            <div className="about-detail-card">

              <div className="about-icon">
                <MapPin size={22} />
              </div>

              <div>
                <span>Location</span>
                <h4>{profile.location}</h4>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;

