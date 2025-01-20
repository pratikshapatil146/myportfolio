import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Connect = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !message) {
            setStatus('Please fill in all fields.');
            return;
        }

        // EmailJS integration
        emailjs
            .send(
                'service_iki8z1m', // Replace with your EmailJS Service ID
                'template_ngokyin', // Replace with your EmailJS Template ID
                { email, message }, // Template parameters
                'Sfw35uMDUeHL9kWuK' // Replace with your EmailJS User ID
            )
            .then(() => {
                setEmail('');
                setMessage('');
                setStatus('Thank you for reaching out! Your message has been sent.');
            })
            .catch(() => setStatus('Failed to send the message. Please try again.'));
    };

    return (
        <section id="connect">
            <h2>Connect With Me</h2>
            <p>
                Feel free to drop me an email! Fill out the form below, and I'll get back to you as soon as possible.
            </p>
            <form onSubmit={handleSubmit} className="connect-form">
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Send</button>
                {status && <p className="status-message">{status}</p>}
            </form>
            <div className="social-media">
                <a href="https://www.linkedin.com/in/pratiksha-patil-718b2a159" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} className="social-icon linkedin" />
                </a>
                <a href="https://github.com/pratikshapatil146" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} className="social-icon github" />
                </a>
            </div>
        </section>

    );
};

export default Connect;
