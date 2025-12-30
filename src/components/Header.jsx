import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../assets/logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Program', path: '/program' },
  { name: 'Project', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md h-20">
      <nav className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={LogoImage} alt="Logo" className="h-12" />
          <span className="font-bold text-blue-main text-lg">
          </span>
        </Link>

        <ul className="flex gap-8 text-sm font-semibold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="text-gray-700 hover:text-blue-main transition"
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* HASH NAV */}
          <li>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-blue-main transition"
            >
              Testimonials
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
