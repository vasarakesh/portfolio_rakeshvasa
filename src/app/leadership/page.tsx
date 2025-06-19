'use client';

import { motion } from 'framer-motion';

const leadershipRoles = [
  {
    title: 'Research Ambassador',
    organization: 'Rowan University',
    description: 'Presented research on SMOTE algorithm applications',
  },
  {
    title: 'NSS Volunteer',
    organization: 'National Service Scheme',
    description: 'Contributed 120+ hours to rural student digital literacy programs',
  },
  {
    title: 'Panel Lead',
    organization: 'IDASCN International Conference',
    description: 'Led panel discussions on emerging cybersecurity trends',
  },
  {
    title: 'Student Coordinator',
    organization: 'IPR-Expo',
    description: 'Coordinated student participation and event logistics',
  },
  {
    title: 'Roll of Honour',
    organization: 'Sree Vidyanikethan',
    description: 'Recognized for outstanding academic and leadership achievements',
  },
];

export default function Leadership() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Leadership & Achievements</h1>

          <div className="space-y-8">
            {leadershipRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{role.title}</h3>
                    <p className="text-blue-600">{role.organization}</p>
                  </div>
                </div>
                <p className="text-gray-600 mt-2">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 