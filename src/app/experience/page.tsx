'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Network Administrator',
    company: 'CGPC Solutions, Philadelphia',
    period: 'Present',
    achievements: [
      'Configure firewalls, servers, and routers; setup and maintain network infrastructure',
      'Handle backups and configure backup systems including Synology NAS backups',
      'Maintain and monitor cybersecurity incidents and handle everyday IT tickets',
    ],
  },
  {
    title: 'ACSUS Lab Researcher',
    company: 'Rowan University',
    period: 'Jan 2025 – May 2025',
    achievements: [
      'Designed decentralized event validation system using Rust across 42 Raspberry Pis',
      'Achieved 13.3 req/s throughput, <20s latency',
    ],
  },
  {
    title: 'Backend Developer',
    company: 'Vikas Bandhu',
    period: 'Jun 2022 – Feb 2023',
    achievements: [
      'Built AWS Cognito IAM module for 10K+ users',
      'Mentored junior developers on secure coding',
    ],
  },
  {
    title: 'AWS Cloud Internship',
    company: 'AWS',
    period: 'Oct 2021 – Dec 2021',
    achievements: [
      'Projects using EC2, S3, Lambda',
    ],
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Experience</h1>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <p className="text-gray-500 text-sm">{exp.period}</p>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 