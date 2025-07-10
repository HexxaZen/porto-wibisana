'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I&apos;m <span className="gradient-text">Dwi Agus Wibisana</span></h1>
            <h2 className="text-2xl md:text-3xl text-blue-400 mb-6">Web Developer</h2>
            <p className="text-gray-300 mb-8 max-w-lg">Crafting digital experiences with clean code and innovative solutions. Specializing in Laravel, TypeScript, and modern web technologies.</p>
            <div className="flex space-x-4">
              <Link href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition transform hover:-translate-y-1">Hire Me</Link>
              <Link href="#projects" className="border border-blue-400 text-blue-400 hover:bg-blue-900 hover:bg-opacity-30 px-6 py-3 rounded-lg transition transform hover:-translate-y-1">View Work</Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-800 rounded-full opacity-30 blur-lg"></div>
              {/* Replace with your actual image path */}
              <Image src="/images/wibi_hero.jpg" alt="Dwi Agus Wibisana" width={400} height={400} className="relative w-full h-full object-cover rounded-full border-4 border-blue-500 floating" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" className="text-blue-400 text-4xl">
          <FontAwesomeIcon icon={faChevronDown} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;