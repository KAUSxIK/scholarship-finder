import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Info, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16 border-t border-gray-700">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 items-center justify-between">
        {/* Left Side */}
        <div className="text-sm">
          <p>&copy; {new Date().getFullYear()} <span className="font-semibold text-orange-400">Scholarship Finder</span>. All rights reserved.</p>
          <p className="mt-1 text-xs text-gray-400">Made by IITIAN</p>
        </div>

        {/* Right Side */}
        <div className="flex justify-center md:justify-end space-x-6 text-sm">
          <Link to="/about" className="flex items-center hover:text-orange-400 transition">
            <Info className="w-4 h-4 mr-1" /> About
          </Link>
          <a
            href="mailto:kausikmohapatra0@gmail.com"
            className="hover:text-orange-400 transition duration-300"
          >
            Contact Us
          </a>
          
        </div>
      </div>
    </footer>
  );
}

