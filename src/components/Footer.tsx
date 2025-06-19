import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link
            href="/contact"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Contact
          </Link>
          <Link
            href="https://github.com/vasarakesh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/rakeshvasa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:vasarakesh1290@gmail.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Email
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Rakesh Vasa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 