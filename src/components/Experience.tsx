'use client';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900 bg-opacity-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" data-aos="fade-up">
          <span className="gradient-text">My Experience</span>
        </h2>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-blue-800 transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {/* Experience 1 */}
            <div className="relative" data-aos="fade-up">
              <div className="md:flex">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-blue-400">Internship Web Developer</h3>
                  <p className="text-gray-400">Sinergi Inovasi Tekno, Jakarta</p>
                  <p className="text-sm text-gray-500">June 2025 - Present</p>
                </div>
                <div className="hidden md:block absolute left-1/2 -ml-4 mt-2 w-8 h-8 rounded-full bg-blue-600 border-4 border-blue-300 transform -translate-x-1/2"></div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg border border-blue-900 card-hover">
                    <p className="text-gray-300">Working remotely as part of the development team, contributing to various web projects using Laravel and TypeScript. Collaborating with senior developers to implement new features and optimize existing code.</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm">Laravel</span>
                      <span className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm">TypeScript</span>
                      <span className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm">MySQL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="relative" data-aos="fade-up">
              <div className="md:flex flex-row-reverse">
                <div className="md:w-1/2 md:pl-12 md:text-left mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-blue-400">Web Developer</h3>
                  <p className="text-gray-400">Merra Coffee & Talk, Kudus</p>
                  <p className="text-sm text-gray-500">December 2024 - June 2025</p>
                </div>
                <div className="hidden md:block absolute left-1/2 -ml-4 mt-2 w-8 h-8 rounded-full bg-blue-600 border-4 border-blue-300 transform -translate-x-1/2"></div>
                <div className="md:w-1/2 md:pr-12">
                  <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg border border-blue-900 card-hover">
                    <p className="text-gray-300">Developed and maintained the company&apos;s inventory management system using Laravel. Implemented features for stock tracking, reporting, and user management.</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm">Laravel</span>
                      <span className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm">JavaScript</span>
                      <span className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm">Bootstrap</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="relative" data-aos="fade-up">
              <div className="md:flex">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-blue-400">FreeLancer</h3>
                  <p className="text-gray-400">Personal Bussiness</p>
                  <p className="text-sm text-gray-500">May 2023 - Present</p>
                </div>
                <div className="hidden md:block absolute left-1/2 -ml-4 mt-2 w-8 h-8 rounded-full bg-blue-600 border-4 border-blue-300 transform -translate-x-1/2"></div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg border border-blue-900 card-hover">
                    <p className="text-gray-300">Create assignment jockey orders for all courses, especially in the web development sector</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm">Web Development</span>
                      <span className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm">Customer Services</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;