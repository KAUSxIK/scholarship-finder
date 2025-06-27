import { Router } from "express";
import {
  addBookmark,
  getBookmarks,
  removeBookmark,
} from "../controllers/bookmark.controller.js"; // Don't forget `.js` if using ES Modules

const router = Router();

// Add a scholarship to the user's bookmarks
router.post('/add', addBookmark);

// Remove a scholarship from bookmarks
router.post('/remove', removeBookmark);

// Get all bookmarks for a user
router.get('/:userId', getBookmarks);

export default router;
