import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Scholarship Finder. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link to="/about" className="hover:text-orange-400 transition duration-300">About</Link>
          <Link to="/contact" className="hover:text-orange-400 transition duration-300">Contact</Link>
          <Link to="/privacy" className="hover:text-orange-400 transition duration-300">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
