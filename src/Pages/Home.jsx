import React from 'react';
import Hero from '../components/Hero'; 
import Pillars from '../components/Pillars';
import Schedule from '../components/Schedule';
import Projects from '../components/Projects';
import Testimonial from '../components/Testimonial';

const Home = () => {
  return (
    <div className="Home">
      <Hero /> 
      <Pillars />
      <Schedule />
      <Projects />
      <section className="py-16 bg-gray-50 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Apa Kata Mahasiswa?</h2>
        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Menampilkan beberapa testimonial di Home */}
            <Testimonial />
            <Testimonial />
            <Testimonial />
        </div>
      </section>
    </div>
  );
};

export default Home;