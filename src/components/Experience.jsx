import React from 'react';
import { Briefcase, CalendarDays, MapPin } from 'lucide-react';

import { experiences } from '../data/portfolioData';

import './Experience.css';

function Experience() {
  return (
    <section className="experience-section" id="experience">

      <div className="experience-container">

        {/* SECTION HEADING */}

        <div className="experience-heading">
          <p>MY PROFESSIONAL JOURNEY</p>

          <h2>
            Work <span>Experience</span>
          </h2>

          <div className="experience-line"></div>
        </div>


        {/* EXPERIENCE TIMELINE */}

        <div className="experience-timeline">

          {experiences.map((item) => (

            <div className="experience-card" key={item.id}>

              {/* TIMELINE ICON */}

              <div className="experience-icon">
                <Briefcase size={22} />
              </div>


              {/* EXPERIENCE DETAILS */}

              <div className="experience-content">

                <div className="experience-top">

                  <div>
                    <h3>{item.role}</h3>
                    <h4>{item.company}</h4>
                  </div>

                  <span className="experience-date">
                    <CalendarDays size={15} />
                    {item.duration}
                  </span>

                </div>


                {/* RESPONSIBILITIES */}

                <div className="experience-responsibilities">

                  <h5>
                    Key Responsibilities
                  </h5>

                  <ul>
                    {item.responsibilities.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;
