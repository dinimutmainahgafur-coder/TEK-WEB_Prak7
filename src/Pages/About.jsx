import React from 'react';
import Header from '../components/Header.jsx'; // 
import Footer from '../components/Footer.jsx';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="py-32 px-10 flex-grow max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">Tentang Kami</h1>
        <p className="text-lg text-gray-700">Ruang Ekspresi adalah wadah kolaboratif untuk mahasiswa yang bersemangat dalam inovasi dan pengembangan diri. Kami berfokus pada empat pilar utama: Ideation, Creation, Collaboration, dan Guidance & Support.</p>
      </main>
      <Footer />
    </div>
  );
};

export default About;