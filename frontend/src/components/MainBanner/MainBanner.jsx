import React from 'react';
import { Link } from 'react-router-dom';
import mainbaner from '../../assets/mainbaner.png';
import smallbanner from '../../assets/smallbanner.png';

function MainBanner() {
  return (
    <div className="relative w-full">
      {/* Background Images */}
      <img src={mainbaner} alt="Main Banner" className="w-full hidden md:block" />
      <img src={smallbanner} alt="Small Banner" className="w-full md:hidden" />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-center px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
          Empowering Education Through Scholarships
        </h1>
        <p className="text-white text-sm md:text-lg mb-6">
          Discover, Match, and Apply to Scholarships Easily
        </p>
        <Link
          to="/studentdashboard"
          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded shadow transition duration-300"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}

export default MainBanner;
