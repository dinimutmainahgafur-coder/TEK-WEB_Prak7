import React from 'react';
import HeroImage from '../assets/hero.png';

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-blue-50 via-white to-pink-50"
    >
      <div className="flex items-center max-w-7xl mx-auto gap-16 pt-32 pb-24 px-6">
        
        <div className="w-1/2">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            <span className="text-blue-600">RUANG EKSPRESI</span> : Wadah <br />
            Kreatif & Kompetitif <br />
            Mahasiswa
          </h1>

          <p className="text-lg text-gray-600 max-w-xl mb-10">
            Ruang kolaborasi mahasiswa untuk mengembangkan ide,
            menciptakan karya, dan bersaing secara profesional.
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium shadow-sm">
              Ideation
            </span>
            <span className="px-5 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium shadow-sm">
              Creation
            </span>
            <span className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium shadow-sm">
              Collaboration
            </span>
            <span className="px-5 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-medium shadow-sm">
              Guidance & Support
            </span>
          </div>
        </div>

        <div className="w-1/2">
          <img
            src={HeroImage}
            alt="Meeting Group"
            className="rounded-3xl shadow-2xl ring-1 ring-gray-200"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
