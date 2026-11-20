
import React from 'react';

import {
  ArrowRight,
  Download,
  MapPin
} from 'lucide-react';

import { profile } from '../data/portfolioData';

import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* LEFT CONTENT */}

        <div className="hero-content">

          <p className="hero-subtitle">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            Hello, I'm <span>{profile.name}</span>
          </h1>

          <h2>{profile.role}</h2>

          <p className="hero-description">
            {profile.summary}
          </p>

          <div className="hero-location">
            <MapPin size={18} />
            <span>{profile.location}</span>
          </div>

          {/* BUTTONS */}

          <div className="hero-buttons">

            <a
              href="#contact"
              className="hero-btn-primary"
            >
              Contact Me
              <ArrowRight size={18} />
            </a>

            <a
              href="/Vineet-Kumar-Resume.pdf"
              download="Vineet-Kumar-Resume.pdf"
              className="hero-btn-secondary"
            >
              Download Resume
              <Download size={18} />
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="hero-image-container">

          <div className="hero-image-frame">

            <img
              src="/vineet-profile.png"
              alt="Vineet Kumar"
              className="hero-image"
            />

          </div>

          <p className="hero-image-caption">
            Front Office Professional
          </p>

        </div>

      </div>

    </section>
  );
}

export default Hero;
