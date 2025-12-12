// src/App.jsx 
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Program from './Pages/Program.jsx';
import ProjectsPage from './Pages/Projects.jsx'; // Ganti nama agar tidak bentrok dengan komponen Projects
import Contact from './Pages/Contact.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/program" element={<Program />} />
      <Route path="/projects" element={<ProjectsPage />} /> 
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;