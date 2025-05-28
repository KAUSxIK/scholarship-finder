import React from 'react';
import scholarships from '../../Data/scholarships.js';

export default function Home() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-orange-700 mb-6">Featured Scholarships</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {scholarships.map((scholarship) => (
          <div key={scholarship.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800">{scholarship.name}</h2>
            <p className="mt-2 text-sm text-gray-600"><strong>Amount:</strong> {scholarship.amount}</p>
            <p className="text-sm text-gray-600"><strong>Deadline:</strong> {scholarship.deadline}</p>
            <p className="text-sm text-gray-600"><strong>Eligibility:</strong> {scholarship.eligibility}</p>
            <a
              href={scholarship.link}
              className="inline-block mt-4 text-sm text-white bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
