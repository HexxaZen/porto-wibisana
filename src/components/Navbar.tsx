'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`glass-nav fixed top-0 left-1/2 transform -translate-x-1/2 z-50 px-6 transition-all duration-300 ${
      isScrolled ? 'py-3 shadow-lg' : 'py-4'
    }`}>
      <div className="flex justify-between items-center">
        <Link href="#home" className="text-2xl font-bold gradient-text" onClick={closeMobileMenu}>
          DWI AGUS W.
        </Link>
        <div className={`md:flex space-x-8 ${
          isMobileMenuOpen ? 'flex flex-col absolute top-full left-0 right-0 bg-slate-900 p-6 space-y-4 md:space-y-0 md:space-x-8' : 'hidden'
        }`}>
          <Link href="#home" className="text-blue-400 hover:text-white transition" onClick={closeMobileMenu}>Home</Link>
          <Link href="#about" className="text-gray-300 hover:text-white transition" onClick={closeMobileMenu}>About</Link>
          <Link href="#experience" className="text-gray-300 hover:text-white transition" onClick={closeMobileMenu}>Experience</Link>
          <Link href="#projects" className="text-gray-300 hover:text-white transition" onClick={closeMobileMenu}>Projects</Link>
          <Link href="#contact" className="text-gray-300 hover:text-white transition" onClick={closeMobileMenu}>Contact</Link>
        </div>
        <button className="md:hidden text-white focus:outline-none" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="text-xl" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;