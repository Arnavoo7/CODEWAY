import React from 'react';
import './About.css';

import VisibilitySensor from 'react-visibility-sensor';


const About = () => {
  const handleIntersection = (inView) => {
    if (inView) {
      // Trigger your animation logic here
      // You might want to use state to control the animation class
      document.getElementById('about-tab-1').classList.add('animate-slide');
      document.getElementById('about-tab-2').classList.add('animate-slide');
      document.getElementById('about-tab-3').classList.add('animate-slide');

    }
  };


  const resume_url = 'https://drive.usercontent.google.com/download?id=1FF97Ackp6b2Topal5lu-KfkZ-IxJaHYa&export=download&authuser=0';

  return (
    <div id='about'>
      
      <div id='about-title'>
        <hr className='hr-style' />
        <h1>About</h1>
        <a href={resume_url} download='Arnab_Mahato_resume.pdf'>
          Download CV
        </a>
      </div>

      <div id='about-container'>
        <div id='profile-text-content'>
          <h2>
          Enthusiastic and hands-on web developer with practical experience in crafting dynamic web applications. Proficient in Frontend technologies (React.js, HTML, CSS) and Backend development (Java with Spring Boot). Solid understanding of MySQL. Actively seeking entry-level opportunities to apply and expand technical skills. Committed to contributing innovative solutions and dedicated to continuous learning and growth.
          </h2>
        </div>

        <VisibilitySensor
          onChange={handleIntersection}
          threshold={0.7} // Trigger the callback when 50% of the element is in view
        >
          <div id='about-tabs'>
            <div id='about-tab-1'>
              <h3>Experience </h3>
              <span>1+ Years</span>
            </div>
            <div id='about-tab-2'>
              <h3>Projects</h3>
              <span>5+</span>
            </div>
            <div id='about-tab-3'>
              <h3>Void</h3>
            </div>
          </div>
        </VisibilitySensor>
      </div>

      <div></div>
    </div>
  );
};

export default About;
