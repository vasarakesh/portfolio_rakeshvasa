'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';

const experiences = [
  {
    title: 'Network Security Engineer',
    company: 'CGPC Solutions',
    location: 'Philadelphia, PA',
    period: 'Nov 2025 - Present',
    achievements: [
      'Configured and maintained FortiGate and Palo Alto firewalls, including firewall rules, VPNs, IDS/IPS, and traffic segmentation',
      'Administered Windows and Linux servers, supporting internal systems and business applications',
      'Managed Active Directory, including user provisioning, group policies, permissions, DNS, and authentication services',
      'Evaluated and researched new security tools and solutions to enhance network and infrastructure security',
    ],
  },
  {
    title: 'IT Security Operations Analyst',
    company: 'CGPC Solutions',
    location: 'Philadelphia, PA',
    period: 'Sep 2025 – Nov 2025',
    achievements: [
      'Managed procurement, pilot testing, and initial setup of approved AI, Backup and IT management tools; partnered with stakeholders to map current vs. future workflows and integrate solutions with existing processes',
      'Implemented and documented Synology NAS backup strategies scheduled test restores and retention policies',
      'Resolved 200+ IT tickets; surfaced patterns to prioritize automation and tool integrations',
    ],
  },
  {
    title: 'DevSecOps Volunteer',
    company: 'Saayam For All',
    location: 'Remote',
    period: 'Jul 2025 – Present',
    achievements: [
      'Collaborated in a distributed software development team, enhancing real-time reliability of microservices through CI/CD improvements. Leveraged automated monitoring and alerting (AWS CloudWatch) to solve live system issues',
      'Practiced problem-solving and team communication while supporting high-scale deployments and contributing to self-directed incident management',
    ],
  },
  {
    title: 'Advanced Cyber Systems and Usable Security Lab Researcher',
    company: 'Rowan University',
    location: 'Glassboro, NJ',
    period: 'Jan 2025 – May 2025',
    achievements: [
      'Designed a distributed system for real-time smart-contract state validation using Rust. Focused on real-time query processing, data consistency, and latency optimization in production-scale simulations',
      'Benchmarked latency and throughput under real-time load, simulating storage availability at scale (>13 req/s), with emphasis on zero downtime and distributed data consistency',
    ],
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-center">
            Professional Experience
          </h1>
          <p className="text-lg text-gray-400 mb-12 text-center max-w-2xl mx-auto">
            Building secure systems and solving complex cybersecurity challenges
          </p>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="interactive-card bg-gray-800/60 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-700 hover:border-gray-600"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-gray-300">
                      <div className="flex items-center gap-2">
                        <FaBriefcase className="w-4 h-4 text-gray-400" />
                        <span className="text-lg font-semibold">{exp.company}</span>
                      </div>
                      {exp.location && (
                        <>
                          <span className="hidden sm:inline text-gray-600">•</span>
                          <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="w-4 h-4 text-gray-400" />
                            <span>{exp.location}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700/50 text-gray-200 rounded-lg text-sm font-medium border border-gray-600">
                      <FaCalendar className="w-3 h-3" />
                      {exp.period}
                    </div>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.15 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-white mt-1.5 flex-shrink-0 font-bold">▸</span>
                      <span className="text-gray-300 leading-relaxed">{achievement}</span>
                    </motion.li>
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
