'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rakeshvasa/',
      icon: '🔗'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/vasarakesh',
      icon: '💻'
    },
    {
      name: 'Email',
      url: 'mailto:vasarakesh1290@gmail.com',
      icon: '📧'
    }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : '_self'}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <span className="sr-only">{link.name}</span>
                <span className="text-2xl">{link.icon}</span>
              </a>
            ))}
          </div>
          
          <p className="text-sm text-gray-500">
            © {currentYear} Rakesh Vasa. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
} 