import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
<div className="text-blue-500 text-3xl font-bold">Tailwind is now working!</div>