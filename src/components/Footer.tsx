import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-blue-900 border-opacity-30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="text-2xl font-bold gradient-text">DWI AGUS W.</Link>
            <p className="text-gray-400 mt-2">Web Developer & Digital Craftsman</p>
          </div>

          <div className="flex space-x-6">
            <Link href="#home" className="text-gray-400 hover:text-blue-400 transition">Home</Link>
            <Link href="#about" className="text-gray-400 hover:text-blue-400 transition">About</Link>
            <Link href="#experience" className="text-gray-400 hover:text-blue-400 transition">Experience</Link>
            <Link href="#projects" className="text-gray-400 hover:text-blue-400 transition">Projects</Link>
            <Link href="#contact" className="text-gray-400 hover:text-blue-400 transition">Contact</Link>
          </div>
        </div>

        <div className="border-t border-blue-900 border-opacity-30 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2023 Dwi Agus Wibisana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;