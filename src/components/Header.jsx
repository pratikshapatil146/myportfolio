import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = ({ toggleDarkMode, darkMode }) => (
    <header>
        <h1>Pratiksha Patil</h1>
        <nav>
            <ul>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact Me</a>
                </li>
                <li>
                    <a href="#connect">Connect Me</a>
                </li>
            </ul>
        </nav>
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
            {darkMode ? <FaSun title="Light Mode" /> : <FaMoon title="Dark Mode" />}
        </button>
    </header>
);

export default Header;
