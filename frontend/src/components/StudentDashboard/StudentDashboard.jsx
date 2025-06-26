import React, { useState } from 'react';

const StudentDashboard = () => {
  const [formData, setFormData] = useState({
     course: '',
  gpa: '',
  location: '',
  income: '',
  interests: '',
  });

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      categories: checked
        ? [...prev.categories, value]
        : prev.categories.filter((v) => v !== value),
    }));
  };

  const handleStudentDashboard = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:8002/api/scholarships/match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setResults(data.matched || []);
    } catch (err) {
      console.error('Error:', err);
      setError('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

    // ✅ Handle Bookmark
  const handleBookmark = async (scholarshipId) => {
    const token = JSON.parse(localStorage.getItem('token'));
    console.log("📦 Sending token:", token);

      if (!token) {
    alert("Please log in to bookmark this scholarship.");
    return;
  }

    try {
      const res = await fetch('http://localhost:8002/api/bookmarks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ scholarshipId }),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.message || 'Bookmark failed');
      } else {
        alert('Bookmarked!');
      }
    } catch (err) {
      alert('Server error while bookmarking.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 mt-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">🎓 Student Profile</h2>

      <form onSubmit={handleStudentDashboard} className="space-y-5">
        {/* Course */}
        <div>
          <label className="block font-medium">Course</label>
          <select
            required
            value={formData.course}
            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
            className="w-full mt-1 p-2 border rounded"
          >
            <option value="">Select Course</option>
            <option value="BTech">B.Tech</option>
            <option value="MTech">M.Tech</option>
            <option value="BSc">B.Sc</option>
            <option value="BA">BA</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* GPA */}
        <div>
          <label className="block font-medium">GPA</label>
          <input
            type="number"
            step="0.1"
            required
            value={formData.gpa}
            onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
            className="w-full mt-1 p-2 border rounded"
            placeholder="Enter GPA"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-medium">Location</label>
          <input
            type="text"
            required
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full mt-1 p-2 border rounded"
            placeholder="City, State"
          />
        </div>

        {/* Income */}
        <div>
          <label className="block font-medium">Income</label>
          <input
            type="number"
            required
            value={formData.income}
            onChange={(e) => setFormData({ ...formData, income: e.target.value })}
            className="w-full mt-1 p-2 border rounded"
            placeholder="e.g. 500000"
          />
        </div>

        {/* Categories */}
      

        {/* Interests */}
        <div>
          <label className="block font-medium">Interests</label>
          <input
            type="text"
            value={formData.interests}
            onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
            className="w-full mt-1 p-2 border rounded"
            placeholder="e.g. Coding, Research, Design"
          />
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded shadow"
          >
            {loading ? 'Loading...' : 'Submit Profile'}
          </button>
        </div>

        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
      </form>

      {/* Results */}
      {results.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">🎯 Matched Scholarships</h3>
          <ul className="space-y-4">
            {results.map((item, index) => (
              <li key={index} className="p-4 border rounded">
                <h4 className="font-bold">{item.title}</h4>
                <p><strong>Amount:</strong> {item.amount}</p>
                <p><strong>Deadline:</strong> {item.deadline}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  View Details
                </a>
                 <button
                  onClick={() => handleBookmark(item._id)}
                  className="text-red-500 hover:underline mt-2 block"
                >
                Bookmark
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
