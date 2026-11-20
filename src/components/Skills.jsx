import React from 'react';
import {
  Users,
  MessageCircle,
  Clock,
  Lightbulb,
  Handshake,
  Headset,
  Monitor,
  CheckCircle
} from 'lucide-react';

import { skills, software } from '../data/portfolioData';

import './Skills.css';

function Skills() {

  const skillIcons = [
    Users,
    MessageCircle,
    Handshake,
    Clock,
    Lightbulb,
    Headset,
    Users,
    CheckCircle
  ];

  return (
    <section className="skills-section" id="skills">

      <div className="skills-container">

        {/* SECTION HEADING */}

        <div className="skills-heading">

          <p>MY EXPERTISE</p>

          <h2>
            Professional <span>Skills</span>
          </h2>

          <div className="skills-line"></div>

        </div>


        {/* PROFESSIONAL SKILLS */}

        <div className="skills-subheading">
          <h3>Core Skills</h3>
          <p>My professional strengths and abilities</p>
        </div>


        <div className="skills-grid">

          {skills.map((skill, index) => {

            const Icon = skillIcons[index % skillIcons.length];

            return (

              <div className="skill-card" key={skill}>

                <div className="skill-icon">
                  <Icon size={25} />
                </div>

                <h4>{skill}</h4>

              </div>

            );

          })}

        </div>


        {/* SOFTWARE KNOWLEDGE */}

        <div className="software-section">

          <div className="skills-subheading">
            <h3>Software Knowledge</h3>
            <p>Tools and software I have worked with</p>
          </div>


          <div className="software-grid">

            {software.map((item) => (

              <div className="software-card" key={item}>

                <Monitor size={22} />

                <span>{item}</span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;
