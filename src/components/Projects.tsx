'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" data-aos="fade-up">
          <span className="gradient-text">My Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-slate-800 bg-opacity-50 rounded-xl overflow-hidden border border-blue-900 card-hover flex flex-col" data-aos="fade-up" data-aos-delay="100">
            <div className="h-48 bg-blue-900 relative overflow-hidden">
              <Image src="/images/hris_pln.png" alt="HRIS PLN" width={600} height={400} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-blue-800 opacity-30"></div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">Aplikasi HRIS (Human Resource Information System)</h3>
                <p className="text-gray-300 mb-4">Aplikasi HRIS untuk PT.PLN Nusa Daya, Balikpapan berbasis web laravel, tailwindcss, javascript dan php</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm">Laravel</span>
                  <span className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm">Php</span>
                  <span className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm">Tailwindcss</span>
                  <span className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm">JavaScript</span>
                </div>
              </div>
              <div className="flex space-x-3 mt-4">
                <Link href="github.com/HexxaZen" className="text-blue-400 hover:text-white transition" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </Link>
                <Link href="/" className="text-blue-400 hover:text-white transition" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="bg-slate-800 bg-opacity-50 rounded-xl overflow-hidden border border-blue-900 card-hover flex flex-col" data-aos="fade-up" data-aos-delay="100">
            <div className="h-48 bg-blue-900 relative overflow-hidden">
              <Image src="/images/kinerjaKPI.png" alt="KPI Kinerja" width={600} height={400} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-blue-800 opacity-30"></div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">Aplikasi KPI Kinerja</h3>
                <p className="text-gray-300 mb-4">Aplikasi KPI Kinerja untuk PT.BANK berbasis web laravel, bootstrap dan php</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm">Laravel</span>
                  <span className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm">Php</span>
                  <span className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm">Bootstrap</span>
                </div>
              </div>
              <div className="flex space-x-3 mt-4">
                <Link href="/" className="text-blue-400 hover:text-white transition" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </Link>
                <Link href="https://github.com/HexxaZen" className="text-blue-400 hover:text-white transition" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div className="bg-slate-800 bg-opacity-50 rounded-xl overflow-hidden border border-blue-900 card-hover flex flex-col" data-aos="fade-up" data-aos-delay="100">
            <div className="h-48 bg-blue-900 relative overflow-hidden">
              <Image src="/images/starplus.png" alt="Starplus.co.id" width={600} height={400} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-blue-800 opacity-30"></div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">Starplus.co.id</h3>
                <p className="text-gray-300 mb-4">Company profile website with CMS features built using Laravel and TypeScript.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm">Laravel</span>
                  <span className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm">TailwindCSS</span>
                </div>
              </div>
              <div className="flex space-x-3 mt-4">
                <Link href="https://starplus.co.id/" className="text-blue-400 hover:text-white transition" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </Link>
                <Link href="https://github.com/HexxaZen" className="text-blue-400 hover:text-white transition" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </div>
            </div>
          </div>
          {/* Project 4 */}
          <div className="bg-slate-800 bg-opacity-50 rounded-xl overflow-hidden border border-blue-900 card-hover flex flex-col" data-aos="fade-up" data-aos-delay="200">
            <div className="h-48 bg-blue-900 relative overflow-hidden">
              <Image src="/images/merra.png" alt="Merracota.my.id" width={600} height={400} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-blue-800 opacity-30"></div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">Merracota.my.id</h3>
                <p className="text-gray-300 mb-4">Inventory management system for Merra Coffee & Talk built with Laravel.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm">Laravel</span>
                  <span className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm">Bootstrap</span>
                </div>
              </div>
              <div className="flex space-x-3 mt-4">
                <Link href="https://merracota.my.id/" className="text-blue-400 hover:text-white transition" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </Link>
                <Link href="https://github.com/HexxaZen/inventory-app" className="text-blue-400 hover:text-white transition" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </div>
            </div>
          </div>
          {/* Project 5 */}
          <div className="bg-slate-800 bg-opacity-50 rounded-xl overflow-hidden border border-blue-900 card-hover flex flex-col" data-aos="fade-up" data-aos-delay="300">
            <div className="h-48 bg-blue-900 relative overflow-hidden">
              <Image src="/images/daycomp.png" alt="Daycomp" width={600} height={400} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-blue-800 opacity-30"></div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">Daycomp Percetakan</h3>
                <p className="text-gray-300 mb-4">Company profile website built with pure HTML, CSS, and JavaScript.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm">HTML5</span>
                  <span className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm">CSS3</span>
                  <span className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm">JavaScript</span>
                </div>
              </div>
              <div className="flex space-x-3 mt-4">
                <Link href="https://hexxazen.github.io/Company-Profile/" className="text-blue-400 hover:text-white transition" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </Link>
                <Link href="https://github.com/HexxaZen/Company-Profile" className="text-blue-400 hover:text-white transition" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </div>
            </div>
          </div>
          {/* Project 6 */}
          <div className="bg-slate-800 bg-opacity-50 rounded-xl overflow-hidden border border-blue-900 card-hover flex flex-col" data-aos="fade-up" data-aos-delay="300">
            <div className="h-48 bg-blue-900 relative overflow-hidden">
              <Image src="/images/codecoffee.png" alt="Daycomp" width={600} height={400} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-blue-800 opacity-30"></div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">Code Coffee E-Commerce (Personal Project)</h3>
                <p className="text-gray-300 mb-4">Company profile website built with pure HTML, CSS, and JavaScript.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm">HTML5</span>
                  <span className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm">CSS3</span>
                  <span className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm">JavaScript</span>
                </div>
              </div>
              <div className="flex space-x-3 mt-4">
                <Link href="https://hexxazen.github.io/CodeCoffee/" className="text-blue-400 hover:text-white transition" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </Link>
                <Link href="https://github.com/HexxaZen/CodeCoffee" className="text-blue-400 hover:text-white transition" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <Link href="#" className="inline-block border border-blue-500 text-blue-400 hover:bg-blue-900 hover:bg-opacity-30 px-6 py-3 rounded-lg transition">
            View All Projects <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;