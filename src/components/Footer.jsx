import React from 'react';
import LogoImage from '../assets/logo RE.png';

const Footer = () => {
  const quickLinks = ['Home', 'About', 'Program', 'Projects', 'Testimonials', 'Contact'];
  const programs = ['Career Talks', 'Extra Classes', 'Project Work', 'Mentoring'];

  return (
    <footer className="bg-sky-700 text-white pt-12 pb-4 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white pb-10">

        <div className="flex flex-col items-center md:items-start">
          <img
            src={LogoImage}
            alt="Ruang Ekspresi Logo"
            className="w-48 mb-4 mx-auto md:mx-0"
          />

          <p className="text-sm max-w-md mb-4 text-left">
            Wadah kreatif dan kompetitif untuk mahasiswa yang ingin mengembangkan
            potensi melalui ideation, creation, collaboration, dan guidance.
          </p>

          <div className="text-xs space-y-1 opacity-90 text-left">
            <p>📍 Jl. Ringroad Selatan, Banguntapan, Bantul, DIY</p>
            <p>✉️ ruang_ekspresi@webmail.uad.ac.id</p>
            <p>📞 (0274) 511630</p>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-left">
            {quickLinks.map(link => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="hover:text-blue-300 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-3">Programs</h3>
          <ul className="space-y-2 text-sm text-left">
            {programs.map(program => (
              <li key={program}>
                <a
                  href="/program"
                  className="hover:text-blue-300 transition"
                >
                  {program}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center text-xs opacity-70 mt-4">
        © 2025 Ruang Ekspresi | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
