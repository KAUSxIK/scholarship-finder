import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-orange-700 mb-4">
          About Scholarship Finder
        </h1>
        <p className="text-gray-700 text-lg">
          Scholarship Finder helps students discover relevant scholarships easily.
          This platform filters and matches scholarships based on your profile,
          eligibility, and more.
        </p>
      </div>
    </div>
  );
}
