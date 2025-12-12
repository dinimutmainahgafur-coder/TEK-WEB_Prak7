import React from 'react';
import Header from '../components/Header';
import ProjectsComponent from '../components/Projects';
import Footer from '../components/Footer';

const Projects = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24">
        <ProjectsComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;