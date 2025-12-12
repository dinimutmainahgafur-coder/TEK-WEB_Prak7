import React from 'react';
import { Link } from 'react-router-dom';

import LogoImage from '../assets/logo.png'; 

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Program', path: '/program' },
  { name: 'Project', path: '/projects' },
  { name: 'Testimonials', path: '/#testimonials' }, 
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-10 border-b border-white bg-white fixed w-full top-0 z-50 shadow-md">
      
   
      <Link to="/" className="flex items-center space-x-2">
   
        <img 
          src={LogoImage} 
          alt="Ruang Ekspresi Logo" 
          className="h-12 w-auto" 
        />
    
        <div className="text-xl font-bold text-blue-600 flex items-baseline"></div>
      </Link>
      
    
      <ul className="flex space-x-8">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link 
              to={link.path}
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-200 text-sm"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;