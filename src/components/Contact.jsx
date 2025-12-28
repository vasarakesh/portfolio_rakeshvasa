import React, { useEffect } from 'react';
import { FaEnvelope, FaGlobe, FaLinkedin, FaGithub } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#0E1A25] py-20 px-4 mt-auto" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-white text-3xl sm:text-4xl font-bold">Get in Touch</h2>
          <div className="w-12 h-1 bg-rose-400 mx-auto mt-4"></div>
          <p className="text-gray-300 mt-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div 
            className="bg-[#1C2838] p-6 rounded-2xl shadow-[rgba(0,0,0,0.35)_0_6px_12px] hover:shadow-lg transition-shadow"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-5 h-5 text-blue-400" />
                <a 
                  href="mailto:vasarakesh1290@gmail.com" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  vasarakesh1290@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaGlobe className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">
                  Glassboro, New Jersey
                </span>
              </div>
            </div>
          </div>

          <div 
            className="bg-[#1C2838] p-6 rounded-2xl shadow-[rgba(0,0,0,0.35)_0_6px_12px] hover:shadow-lg transition-shadow"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
            <div className="space-y-4">
              <a
                href="https://linkedin.com/in/rakeshvasa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com/vasarakesh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <FaGithub className="w-5 h-5" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center" data-aos="fade-up">
          <p className="text-gray-400">
            Available for freelance work and full-time positions. Let's create something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact; 