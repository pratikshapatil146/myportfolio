import React, { useState } from 'react';
import { Sun, Moon, github, linkedin, Mail, ExternalLink } from 'lucide-react';
import '../styles/styles.scss'
export default function Portfolio() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
            {/* Navigation */}
            <nav className="fixed w-full p-4 flex justify-between items-center backdrop-blur-sm bg-opacity-70">
                <div className="text-2xl font-bold">Pratiksha Patil</div>
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                    {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                </button>
            </nav>

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-6xl font-bold mb-4">
                        Hi, I'm Pratiksha Patil
                    </h1>
                    <p className="text-xl sm:text-2xl mb-8">
                        Frontend Developer specializing in React and Modern Web Technologies
                    </p>
                    <div className="flex gap-4">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                            <github size={24} />
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                            <linkedin size={24} />
                        </a>
                        <a href="mailto:your.email@example.com"
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Project Card */}
                        <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                            <h3 className="text-xl font-bold mb-2">Project Name</h3>
                            <p className="mb-4">Project description goes here. Explain what you built and the technologies used.</p>
                            <div className="flex gap-2">
                                <a href="https://github.com/project" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-blue-500 hover:text-blue-600">
                                    <github size={16} />
                                    <span>Code</span>
                                </a>
                                <a href="https://project-demo.com" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-blue-500 hover:text-blue-600">
                                    <ExternalLink size={16} />
                                    <span>Demo</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className={`py-16 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Skills</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'SQL', 'Git', 'Azure'].map((skill) => (
                            <div key={skill} className={`p-4 rounded-lg text-center ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                    <p className="text-xl mb-4">
                        I'm always open to new opportunities and collaborations.
                    </p>
                    <a href="mailto:your.email@example.com"
                        className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                        Send me an email
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className={`py-8 text-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            </footer>
        </div>
    );
};

