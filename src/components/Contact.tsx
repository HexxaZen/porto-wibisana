'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Nomor WhatsApp tujuan
    const whatsappNumber = '6285700498174'; // Ganti dengan nomor WhatsApp Anda
    const encodedName = encodeURIComponent(name);
    const encodedEmail = encodeURIComponent(email);
    const encodedSubject = encodeURIComponent(subject);
    const encodedMessage = encodeURIComponent(message);

    // Membangun pesan WhatsApp
    const whatsappText = `Halo Dwi Agus Wibisana,\n\nNama: ${encodedName}\nEmail: ${encodedEmail}\nSubjek: ${encodedSubject}\n\nPesan:\n${encodedMessage}`;

    // Membangun URL WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

    // Membuka jendela baru ke WhatsApp
    window.open(whatsappUrl, '_blank');

    // Opsional: Reset form setelah pengiriman
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 bg-opacity-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" data-aos="fade-up">
          <span className="gradient-text">Get In Touch</span>
        </h2>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10" data-aos="fade-right">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">Let&apos;s Talk About Your Project</h3>
            <p className="text-gray-300 mb-8">I&apos;m currently available for freelance work or full-time positions. If you have a project that you want to get started, think you need my help with something, or just fancy saying hello, then get in touch.</p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-900 bg-opacity-50 p-3 rounded-lg mr-4">
                  <FontAwesomeIcon icon={faEnvelope} className="text-blue-400 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-200">Email Me</h4>
                  <Link href="mailto:dwiaguswibisonoblora@gmail.com" className="text-blue-400 hover:text-blue-300 transition">dwiaguswibisonoblora@gmail.com</Link>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-900 bg-opacity-50 p-3 rounded-lg mr-4">
                  <FontAwesomeIcon icon={faPhoneAlt} className="text-blue-400 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-200">Call Me</h4>
                  <Link href="tel:+6285700498174" className="text-blue-400 hover:text-blue-300 transition">+62 857 0049 8174</Link>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-900 bg-opacity-50 p-3 rounded-lg mr-4">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-400 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-200">Location</h4>
                  <p className="text-gray-300">Kudus, Central Java, Indonesia</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex space-x-4">
              <Link href="https://www.linkedin.com/in/dwi-agus-wibisana-263a812a0/" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
              <Link href="https://github.com/HexxaZen" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link href="https://instagram.com/wbsn.da/" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
               {/* Tambahkan link WhatsApp di sini */}
              <Link href="https://wa.me/6285700498174" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} />
              </Link>
            </div>
          </div>

          <div className="md:w-1/2" data-aos="fade-left">
            <form className="space-y-6" onSubmit={handleWhatsAppSubmit}> {/* Ubah onSubmit ke handleWhatsAppSubmit */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full contact-input px-4 py-3 rounded-lg focus:outline-none"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full contact-input px-4 py-3 rounded-lg focus:outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full contact-input px-4 py-3 rounded-lg focus:outline-none"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full contact-input px-4 py-3 rounded-lg focus:outline-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition w-full md:w-auto">
                Send Message via WhatsApp <FontAwesomeIcon icon={faWhatsapp} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;