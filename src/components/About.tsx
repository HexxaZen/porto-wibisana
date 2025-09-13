'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer, faDownload } from '@fortawesome/free-solid-svg-icons';
import TechParticles from '../components/TechParticles';
const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <TechParticles/>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" data-aos="fade-up">
          <span className="gradient-text">About Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-10 md:mb-0 flex justify-center" data-aos="fade-right">
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 bg-blue-900 rounded-lg rotate-6"></div>
              {/* Replace with your actual image path */}
              <Image src="/images/IMG_8848.jpg" alt="Dwi Agus Wibisana" width={400} height={400} className="absolute top-0 left-0 w-64 h-64 md:w-72 md:h-72 object-cover rounded-lg -rotate-6 border-4 border-blue-500" />
            </div>
          </div>

          <div className="md:w-2/3 md:pl-12" data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Who am I?</h3>
            <p className="text-gray-300 mb-6">I&apos;m a passionate web developer with experience in building modern web applications and digital solutions. My journey in web development started with a curiosity about how websites work, which has now turned into a professional career.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800 bg-opacity-50 p-4 rounded-lg border border-blue-900">
                <h4 className="font-bold text-blue-400 mb-2"><FontAwesomeIcon icon={faCode} className="mr-2" />Frontend</h4>
                <p className="text-gray-300">HTML5, CSS3, JavaScript, TypeScript, TailwindCSS, Bootstrap</p>
              </div>
              <div className="bg-slate-800 bg-opacity-50 p-4 rounded-lg border border-blue-900">
                <h4 className="font-bold text-blue-400 mb-2"><FontAwesomeIcon icon={faServer} className="mr-2" />Backend</h4>
                <p className="text-gray-300">Laravel, PHP, MySQL, REST APIs, Authentication</p>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="font-bold text-blue-400 mb-4">My Skills</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Laravel</span>
                    <span className="text-blue-400">85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">TypeScript</span>
                    <span className="text-blue-400">75%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">JavaScript</span>
                    <span className="text-blue-400">90%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/documents/CV_WIBISANA.pdf" download="Dwi_Agus_Wibisana_CV.pdf" className="inline-block border border-blue-500 text-blue-400 hover:bg-blue-900 hover:bg-opacity-30 px-6 py-2 rounded-lg transition">
              <FontAwesomeIcon icon={faDownload} className="mr-2" /> Download CV
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;