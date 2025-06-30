import React, { useEffect, useState } from 'react';

const Bookmark = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = localStorage.getItem('token');

        if (!user || !token) {
          console.error("User not logged in");
          setBookmarks([]);
          setLoading(false);
          return;
        }

        const res = await fetch(`https://scholarship-finder-backend-9rkn.onrender.com/api/bookmarks/${user._id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        const data = await res.json();
        setBookmarks(data.data || []);
      } catch (err) {
        console.error("Error fetching bookmarks", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookmarks();
  }, []);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-orange-700">Your Bookmarked Scholarships</h1>

      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : bookmarks.length === 0 ? (
        <p className="text-gray-500 italic">No bookmarks found. Go explore and bookmark scholarships you like!</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {bookmarks.map((scholarship) => (
            <div key={scholarship._id} className="p-4 shadow rounded bg-white">
              <h2 className="font-semibold">{scholarship.title}</h2>
              <p>Amount: {scholarship.amount || 'N/A'}</p>
              <p>Deadline: {scholarship.deadline || 'N/A'}</p>
              <a href={scholarship.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                Apply
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmark;
