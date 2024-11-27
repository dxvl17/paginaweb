import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import './styles/animations.css';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <Services />
      <Education />
      <Contact />
    </div>
  );
}

export default App;