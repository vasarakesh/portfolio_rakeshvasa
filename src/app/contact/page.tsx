'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'vasarakesh1290@gmail.com',
      link: 'mailto:vasarakesh1290@gmail.com',
      description: 'Primary contact method'
    },
    {
      icon: '📱',
      title: 'LinkedIn',
      value: 'linkedin.com/in/rakeshvasa',
      link: 'https://www.linkedin.com/in/rakeshvasa/',
      description: 'Professional network'
    },
    {
      icon: '💻',
      title: 'GitHub',
      value: 'github.com/vasarakesh',
      link: 'https://github.com/vasarakesh',
      description: 'Code repositories & projects'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'United States',
      link: null,
      description: 'Available for remote work'
    }
  ];

  const socialProfiles = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rakeshvasa/',
      icon: '🔗',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/vasarakesh',
      icon: '💻',
      color: 'bg-gray-800 hover:bg-gray-900'
    },
    {
      name: 'Email',
      url: 'mailto:vasarakesh1290@gmail.com',
      icon: '📧',
      color: 'bg-red-600 hover:bg-red-700'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">Get In Touch</h1>
          <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12 text-center max-w-2xl mx-auto px-4">
            I&apos;m always interested in new opportunities, collaborations, and interesting projects. 
            Feel free to reach out if you&apos;d like to discuss cybersecurity, cloud security, or any other tech topics!
          </p>

          {/* Quick Contact Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-4"
          >
            {socialProfiles.map((profile) => (
              <a
                key={profile.name}
                href={profile.url}
                target={profile.url.startsWith('http') ? '_blank' : '_self'}
                rel={profile.url.startsWith('http') ? 'noopener noreferrer' : ''}
                className={`${profile.color} text-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 hover:scale-105 active:scale-95`}
              >
                <span>{profile.icon}</span>
                <span>{profile.name}</span>
              </a>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-4 p-4 md:p-5 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-300"
                  >
                    <span className="text-2xl">{info.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                      <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Location Details */}
              <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="text-2xl mr-2">🌍</span>
                  Location & Availability
                </h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Current Location:</strong> United States</p>
                  <p><strong>Time Zone:</strong> EST/PST (Flexible)</p>
                  <p><strong>Work Preference:</strong> Remote & Hybrid</p>
                  <p><strong>Availability:</strong> Open to new opportunities</p>
                </div>
              </div>

              {/* What I&apos;m Looking For */}
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">What I&apos;m Looking For</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Cybersecurity consulting opportunities</li>
                  <li>• Cloud security architecture projects</li>
                  <li>• Security research collaborations</li>
                  <li>• Speaking engagements and workshops</li>
                  <li>• Open source security tool contributions</li>
                  <li>• Full-time cybersecurity roles</li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </div>
  );
} 