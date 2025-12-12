import React from 'react';
import LogoImage from '../assets/logo RE.png'; 

const Footer = () => {
  const quickLinks = ['Home', 'About', 'Program', 'Projects', 'Testimonials', 'Contact'];
  const programs = ['Career Talks', 'Extra Classes', 'Project Work', 'Mentoring'];

  return (
    <footer className="bg-blue-800 text-white pt-16 pb-4 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-white pb-10">
        
        <div className="col-span-2">
          <div className="flex items-center mb-4">
            <img src={LogoImage} alt="Ruang Ekspresi Logo" /> 
          </div>
          <p className="mb-6 text-sm max-w-sm">
            Wadah kreatif dan kompetitif untuk mahasiswa yang ingin mengembangkan potensi melalui ideation, creation, collaboration, dan guidance.
          </p>
          <div className="text-xs space-y-2">
            <p>📍 Jl. Ringroad Selatan, Kragilan, Tamanan, Kec. Banguntapan, Bantul, Daerah Istimewa Yogyakarta 55191</p>
            <p>✉️ ruang_ekspresi@webmail.uad.ac.id</p>
            <p>📞 (0274) 511630</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map(link => <li key={link}><a href={`/${link.toLowerCase()}`} className="hover:text-blue-300">{link}</a></li>)}
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Programs</h3>
          <ul className="space-y-2 text-sm">
            {programs.map(program => <li key={program}><a href={`/program`} className="hover:text-blue-300">{program}</a></li>)}
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