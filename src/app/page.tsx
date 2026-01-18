'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
            Hi, I&apos;m <span className="text-blue-600">Rakesh Vasa</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 md:mb-8 px-4">
            Cybersecurity Researcher | Cloud Security | Rust + Python Developer
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto px-4 leading-relaxed"
          >
            I&apos;m a Cybersecurity Master&apos;s graduate with hands-on experience in AWS, Rust, and Python, 
            and research expertise in decentralized security systems. I build secure systems that scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-4"
          >
            <Link
              href="/projects"
              className="inline-flex items-center px-5 md:px-6 py-2.5 md:py-3 border border-transparent text-sm md:text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 md:px-6 py-2.5 md:py-3 border border-gray-300 text-sm md:text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center space-x-6 md:space-x-8"
          >
            <a
              href="https://github.com/vasarakesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 hover:scale-110 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-6 h-6 md:w-7 md:h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/rakeshvasa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-6 h-6 md:w-7 md:h-7" />
            </a>
            <a
              href="mailto:vasarakesh1290@gmail.com"
              className="text-gray-600 hover:text-red-600 hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <FaEnvelope className="w-6 h-6 md:w-7 md:h-7" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 