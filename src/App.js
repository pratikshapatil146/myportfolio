import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Connect from './components/Connect';
import './App.scss';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const bodyClass = document.body.classList;
    darkMode ? bodyClass.add('dark-mode') : bodyClass.remove('dark-mode');
  }, [darkMode]);

  return (
    <div className="app">
      <Header toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <main>
        <About />
        <Technologies />
        <Projects />
        <Contact />
        <Connect />
      </main>
      <Footer />
    </div>
  );
};

export default App;
