import { Router } from "express";
import { matchScholarships } from '../controllers/scholarship.controller.js';
import { getAllScholarships } from "../controllers/scholarship.controller.js";

const router = Router();


router.route('/match').post(matchScholarships);
router.route('/data').get(getAllScholarships);


export default router;
