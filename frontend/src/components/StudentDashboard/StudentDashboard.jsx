import React from 'react'
import{ useState } from 'react'

function StudentDashboard() {
  const [profile, setProfile] = useState({
    course: "",
    gpa: "",
    location: "",
    income: "",
    categories: [],
    interests: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setProfile((prev) => ({
        ...prev,
        categories: checked
          ? [...prev.categories, value]
          : prev.categories.filter((v) => v !== value),
      }));
    } else {
      setProfile((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Profile:", profile);
    // TODO: Integrate with backend here
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 mt-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">🎓 Student Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Course / Major */}
        <div>
          <label className="block font-medium">Course / Major</label>
          <select
            name="course"
            value={profile.course}
            onChange={handleChange}
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
          <label className="block font-medium">GPA / Grade</label>
          <input
            type="number"
            step="0.1"
            name="gpa"
            value={profile.gpa}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            placeholder="Enter GPA"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={profile.location}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            placeholder="City, State"
          />
        </div>

        {/* Family Income */}
        <div>
          <label className="block font-medium">Family Income (Optional)</label>
          <input
            type="text"
            name="income"
            value={profile.income}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            placeholder="e.g., < 1L, 1L - 5L, etc."
          />
        </div>

        {/* Special Categories */}
        <div>
          <label className="block font-medium">Special Categories</label>
          <div className="flex flex-wrap gap-4 mt-2">
            {["SC", "ST", "OBC", "Disability", "Sports"].map((cat) => (
              <label key={cat} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="categories"
                  value={cat}
                  onChange={handleChange}
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div>
          <label className="block font-medium">Interests (comma separated)</label>
          <input
            type="text"
            name="interests"
            value={profile.interests}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            placeholder="e.g., Coding, Research, Design"
          />
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded shadow"
          >
            Submit Profile
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentDashboard