import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiPostman, SiSqlite, SiRedux } from 'react-icons/si';
const Technologies = () => (
    <section id="technologies">
        <h2>Tech Stack</h2>
        <div className="tech-icons">
            <div className="icon-container">
                <FaReact className="icon react-icon" size={40} title="React.js" />
                <span className="icon-name">React.js</span>
            </div>
            <div className="icon-container">
                <FaHtml5 className="icon html-icon" size={40} title="HTML5" />
                <span className="icon-name">HTML5</span>
            </div>
            <div className="icon-container">
                <FaCss3Alt className="icon css-icon" size={40} title="CSS3" />
                <span className="icon-name">CSS3</span>
            </div>
            <div className="icon-container">
                <FaJs className="icon js-icon" size={40} title="JavaScript" />
                <span className="icon-name">JavaScript</span>
            </div>
            <div className="icon-container">
                <SiRedux className="icon redux-icon" size={40} title="Redux" />
                <span className="icon-name">Redux</span>
            </div>
            <div className="icon-container">
                <SiSqlite className="icon sql-icon" size={40} title="SQL" />
                <span className="icon-name">SQL</span>
            </div>
            <div className="icon-container">
                <FaGitAlt className="icon git-icon" size={40} title="Git" />
                <span className="icon-name">Git</span>
            </div>
            <div className="icon-container">
                <SiPostman className="icon postman-icon" size={40} title="Postman" />
                <span className="icon-name">Postman</span>
            </div>
        </div>
    </section>
);

export default Technologies;
