import { User } from "../models/user.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// ✅ Add Bookmark
export const addBookmark = async (req, res) => {
  const { userId, scholarshipId } = req.body;

  if (!userId || !scholarshipId) {
    return res.status(400).json({ message: "User ID and Scholarship ID required" });
  }

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (!user.bookmarks.includes(scholarshipId)) {
      user.bookmarks.push(scholarshipId);
      await user.save();
    }

    return res.status(200).json(new ApiResponse(200, user.bookmarks, "Bookmark added"));
  } catch (err) {
    return res.status(500).json({ message: "Error adding bookmark", error: err.message });
  }
};

// ✅ Remove Bookmark
export const removeBookmark = async (req, res) => {
  const { userId, scholarshipId } = req.body;

  if (!userId || !scholarshipId) {
    return res.status(400).json({ message: "User ID and Scholarship ID required" });
  }

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { $pull: { bookmarks: scholarshipId } },
      { new: true }
    );
    return res.status(200).json(new ApiResponse(200, user.bookmarks, "Bookmark removed"));
  } catch (err) {
    return res.status(500).json({ message: "Error removing bookmark", error: err.message });
  }
};

// ✅ Get Bookmarked Scholarships
export const getBookmarks = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    const user = await User.findById(userId).populate("bookmarks");
    if (!user) return res.status(404).json({ message: "User not found" });

    return res.status(200).json(new ApiResponse(200, user.bookmarks, "Bookmarks fetched"));
  } catch (err) {
    return res.status(500).json({ message: "Error fetching bookmarks", error: err.message });
  }
};
