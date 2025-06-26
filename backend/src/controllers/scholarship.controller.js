import { Student } from "../models/student.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
// POST /api/scholarships/match

export const getAllScholarships = async (req, res) => {
  try {
    const scholarships = await Student.find({}); // Fetch all
    res.status(200).json(new ApiResponse(200, scholarships, "Scholarships fetched successfully"));
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch scholarships" });
  }
};


export const matchScholarships = async (req, res) => {
  try {
    console.log("🔍 Incoming student profile:", req.body);

    const { course, gpa, location, income } = req.body;

    const scholarships = await Student.find();

    const matched = scholarships.filter((scholarship) => {
      const gpaMatch =
        !scholarship.min_gpa ||
        scholarship.min_gpa === 'N/A' ||
        parseFloat(gpa) >= parseFloat(scholarship.min_gpa);

      const incomeMatch =
        !scholarship.income_criteria ||
        scholarship.income_criteria === 'N/A' ||
        parseInt(income) <= parseInt(scholarship.income_criteria);

      const locationMatch =
        !scholarship.locations ||
        scholarship.locations.toLowerCase() === 'any' ||
        scholarship.locations.toLowerCase() === location.toLowerCase();

      const courseMatch =
        !scholarship.eligible_courses ||
        scholarship.eligible_courses.toLowerCase() === 'n/a' ||
        scholarship.eligible_courses.toLowerCase() === course.toLowerCase();

      return gpaMatch && incomeMatch && locationMatch && courseMatch;
    });

    res.status(200).json({ matched });
  } catch (err) {
    console.error("❌ Error in matchScholarships:", err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
