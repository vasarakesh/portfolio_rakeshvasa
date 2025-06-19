'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Hi, I&apos;m Rakesh Vasa 👋
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A Cybersecurity Researcher and Cloud Security Specialist passionate about building secure digital solutions.
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/projects"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View Projects
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Security Expertise</h2>
              <p className="text-gray-600">
                Specialized in cloud security, penetration testing, and secure software development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Cloud Architecture</h2>
              <p className="text-gray-600">
                Experienced in designing and implementing secure cloud infrastructure on AWS and GCP.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Research & Innovation</h2>
              <p className="text-gray-600">
                Active contributor to security research and open-source security tools.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
