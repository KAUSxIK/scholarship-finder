import React, { useEffect, useState } from 'react';

export default function Home() {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchScholarships = async () => {
    try {
      const res = await fetch("http://localhost:8002/api/scholarships/data", {
        credentials: "include",
      });
      const json = await res.json();
      if (json.success) setScholarships(json.data);
    } catch (error) {
      console.error("Error fetching scholarships:", error);
    } finally {
      setLoading(false); // ✅ important
    }
  };

  fetchScholarships();
}, []);

   const previewScholarships = scholarships.slice(0, 6);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-orange-700 mb-6">Featured Scholarships</h1>
 

      {loading ? (
        <p className="text-gray-500">Loading scholarships...</p>
      ) : previewScholarships.length === 0 ? (
        <p className="text-gray-500">No scholarships available right now.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {previewScholarships.map((scholarship) => (
            <div
              key={scholarship._id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-800">{scholarship.title}</h2>
              <p className="mt-2 text-sm text-gray-600">
                <strong>Amount:</strong> {scholarship.amount || 'N/A'}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Deadline:</strong> {scholarship.deadline || 'N/A'}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Eligibility:</strong> {scholarship.eligible_courses || 'N/A'}
              </p>
              <a
                href={scholarship.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm text-white bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
