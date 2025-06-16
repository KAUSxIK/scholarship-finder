import mongoose, { Schema } from "mongoose";


const studentSchema = new Schema({
  title: String,
  eligible_courses: String,  // "N/A"
  min_gpa: String,           // "N/A"
  income_criteria: String,   // "N/A"
  locations: String,         // "any"      // "General"
  description: String,
  amount: String,
  deadline: String,
  link: String
});



export const Student = mongoose.model("buddy4study_scholarships", studentSchema);

