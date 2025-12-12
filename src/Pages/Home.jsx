import React from 'react';
import Header from '../components/Header.jsx'; 
import Hero from '../components/Hero.jsx';
import Pillars from '../components/Pillars.jsx';
import Schedule from '../components/Schedule.jsx';
import Projects from '../components/Projects.jsx';
import Testimonial from '../components/testimonial.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white"> 
      <Header />
      <main className="flex-grow">
        <section className="bg-white"> 
          <Hero />
        </section>
        <section className="py-16 bg-white">
          <Pillars />
        </section>
        <section className="py-16 bg-white">
          <Schedule />
        </section>
        <section className="py-16 bg-white">
          <Projects />
        </section>
        <section className="py-16 bg-white" id="testimonials">
          <Testimonial />
        </section>
        
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;