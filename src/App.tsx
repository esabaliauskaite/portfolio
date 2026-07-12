import React, { useEffect } from 'react';
import { theme } from './themes/themes';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    document.body.style.background = theme.bg;
  }, []);

  return (
    <div style={{ background: theme.bg, color: theme.fg }}>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
