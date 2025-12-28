'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const education = [
  {
    school: 'Rowan University',
    degree: 'MS in Cybersecurity',
    period: '2023–2025',
    gpa: 'GPA 3.6',
  },
  {
    school: 'Mohan Babu University',
    degree: 'B.Tech in IT',
    period: '2020–2023',
    gpa: 'GPA 3.2',
  },
  {
    school: 'Diploma',
    degree: 'Computer Engineering',
    period: '2017–2020',
    gpa: '',
  },
];

const certifications = [
  {
    name: 'CCNA R&S',
    description: 'All 4 modules',
  },
  {
    name: 'AWS Cloud Virtual Internship',
    description: 'Hands-on experience with AWS services',
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h1>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-600">
              <Image
                src="/Rakesh.jpg"
                alt="Rakesh Vasa"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-12"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              I hold a Master&apos;s in Cybersecurity from Rowan University, with research in secure decentralized systems 
              and threat detection. I&apos;ve developed secure IAM systems in AWS, built performance benchmarks in Rust, 
              and published ML research in IEEE. I&apos;m passionate about solving complex problems with a blend of 
              security, data, and cloud skills.
            </p>
          </motion.div>

          {/* Education Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Education</h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-900">{edu.school}</h3>
                  <p className="text-gray-600 mt-1">{edu.degree}</p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-gray-500">{edu.period}</p>
                    {edu.gpa && <p className="text-gray-500">{edu.gpa}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Certifications</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-900">{cert.name}</h3>
                  <p className="text-gray-600 mt-1">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
} 