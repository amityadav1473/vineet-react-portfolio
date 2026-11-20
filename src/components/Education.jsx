import React from 'react';
import {
  GraduationCap,
  Award,
  BookOpen
} from 'lucide-react';

import { education } from '../data/portfolioData';

import './Education.css';

function Education() {

  return (
    <section className="education-section" id="education">

      <div className="education-container">

        {/* SECTION HEADING */}

        <div className="education-heading">

          <p>MY QUALIFICATIONS</p>

          <h2>
            Education & <span>Certificates</span>
          </h2>

          <div className="education-line"></div>

        </div>


        {/* EDUCATION CARDS */}

        <div className="education-grid">

          {education.map((item, index) => (

            <div className="education-card" key={item.id}>

              {/* ICON */}

              <div className="education-icon">

                {index === 0 ? (
                  <GraduationCap size={28} />
                ) : index === 1 ? (
                  <BookOpen size={28} />
                ) : (
                  <Award size={28} />
                )}

              </div>


              {/* DETAILS */}

              <div className="education-content">

                <span className="education-number">
                  0{index + 1}
                </span>

                <h3>{item.title}</h3>

                <h4>{item.institute}</h4>

                <p>{item.description}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Education;
