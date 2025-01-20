import React from 'react';

const About = () => (
    <section id="about" className="about-container">
        <div className="about-text">
            <h2>About Me</h2>
            <p>
                Hi,  I'm Pratiksha Patil.<br />
                A skilled <strong>Frontend developer </strong>  with 3+ years of experience in React Js.
            </p>
            <div className='about-skills'>
                <p>Experienced in Agile Practices</p>
                <p>Skilles in collaborating with cross functional teams</p>
                <p>Focused in creating clean,responsive, user-friendly web applications.</p>
                <p>Implemented accessibility for web </p>
            </div>
            <a href="Pratiksha Patil.pdf" download className="download-resume">
                Download My Resume
            </a>
        </div>
        <div className="about-photo">
            <img src="Pratiksha.jpeg" alt="Pratiksha Patil" />
        </div>
    </section>
);

export default About;
