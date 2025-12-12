import React from 'react';
import HeroImage from '../assets/hero.png'; 

const Hero = () => {
  return (
    <div className="flex items-center max-w-7xl mx-auto gap-10 pt-32 pb-16"> 
      <div className="w-1/2">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-8 leading-tight">
          RUANG EKSPRESI : Wadah kreatif & Kompetitif Mahasiswa</h1>
        <div className="flex flex-wrap gap-3">
          <span className="px-6 py-2 rounded-full bg-yellow-200 text-yellow-800 text-sm font-medium shadow-sm">Ideation</span>
          <span className="px-6 py-2 rounded-full bg-green-200 text-green-800 text-sm font-medium shadow-sm">Creation</span>
          <span className="px-6 py-2 rounded-full bg-blue-200 text-blue-800 text-sm font-medium shadow-sm">Collaboration</span>
          <span className="px-6 py-2 rounded-full bg-pink-200 text-pink-800 text-sm font-medium shadow-sm">Guidance & Support</span>
        </div>
      </div>
      <div className="w-1/2 relative">
        <img 
          src={HeroImage} 
          alt="Meeting Group" 
          className="rounded-xl shadow-2xl border-6 border-white" // 
        />
      </div>
    </div>
  );
};

export default Hero;