'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6"
          >
            <span className="text-white">Hi, I&apos;m </span>
            <span className="text-gradient">Rakesh Vasa</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 md:mb-8 font-medium"
          >
            Cybersecurity Researcher | Cloud Security | Rust + Python Developer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base md:text-lg text-gray-400 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            I&apos;m a Cybersecurity Master&apos;s graduate with hands-on experience in AWS, Rust, and Python, 
            and research expertise in decentralized security systems. I build secure systems that scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12 md:mb-16"
          >
            <Link
              href="/projects"
              className="group interactive-btn inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-lg text-gray-900 bg-white hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl glow-on-hover"
            >
              View My Work
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="group interactive-btn inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-lg text-white bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl glow-on-hover"
            >
              Contact Me
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center items-center space-x-8"
          >
            <a
              href="https://github.com/vasarakesh"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6 glow-on-hover"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-7 h-7 md:w-8 md:h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/rakeshvasa/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6 glow-on-hover"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-7 h-7 md:w-8 md:h-8" />
            </a>
            <a
              href="mailto:vasarakesh1290@gmail.com"
              className="group p-4 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6 glow-on-hover"
              aria-label="Email"
            >
              <FaEnvelope className="w-7 h-7 md:w-8 md:h-8" />
            </a>
          </motion.div>
        </motion.div>

        {/* Quick stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="interactive-card bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gray-600 text-center">
            <div className="text-3xl font-bold text-white mb-2">3+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div className="interactive-card bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gray-600 text-center">
            <div className="text-3xl font-bold text-white mb-2">10+</div>
            <div className="text-gray-400 text-sm">Projects</div>
          </div>
          <div className="interactive-card bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gray-600 text-center">
            <div className="text-3xl font-bold text-white mb-2">MS</div>
            <div className="text-gray-400 text-sm">Cybersecurity</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
