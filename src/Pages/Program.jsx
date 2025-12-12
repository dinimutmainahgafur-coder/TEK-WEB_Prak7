import React from 'react';
import Header from '../components/Header';
import Schedule from '../components/Schedule';
import Pillars from '../components/Pillars';
import Footer from '../components/Footer';

const Program = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24">
        <Schedule />
        <Pillars />
      </div>
      <Footer />
    </div>
  );
};

export default Program;