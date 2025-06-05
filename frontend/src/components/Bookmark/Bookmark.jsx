import React, { useState } from 'react';

export default function Bookmark() {
  // Example bookmarked data; replace with props or API call
  const initialBookmarks = [
    {
      id: 1,
      name: 'Tech Scholars Program',
      amount: '$5,000',
      deadline: '2025-07-15',
      link: '#'
    },
    {
      id: 2,
      name: 'Women in Tech Scholarship',
      amount: '$2,500',
      deadline: '2025-06-10',
      link: '#'
    },
  ];

  const [bookmarks, setBookmarks] = useState(initialBookmarks);

  const handleRemove = (id) => {
    setBookmarks((prev) => prev.filter((s) => s.id !== id));
  };

  const handleApply = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">💾 Your Bookmarked Scholarships</h1>

      {bookmarks.length === 0 ? (
        <p className="text-gray-500">You have no saved scholarships.</p>
      ) : (
        <ul className="space-y-4">
          {bookmarks.map((sch) => (
            <li
              key={sch.id}
              className="bg-white rounded-lg shadow p-5 flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{sch.name}</h2>
                <p className="text-sm text-gray-600">
                  Amount: <span className="font-medium">{sch.amount}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Deadline: <span className="font-medium">{sch.deadline}</span>
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-3">
                <button
                  onClick={() => handleApply(sch.link)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
                >
                  Apply
                </button>
                <button
                  onClick={() => handleRemove(sch.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
);
}
