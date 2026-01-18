import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-8 md:order-2 mb-6 md:mb-0">
          <a
            href="https://github.com/vasarakesh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/rakeshvasa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:vasarakesh1290@gmail.com"
            className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300"
            aria-label="Email"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
          <Link
            href="/contact"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Rakesh Vasa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
