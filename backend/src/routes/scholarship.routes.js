import { Router } from "express";
import { matchScholarships } from '../controllers/scholarship.controller.js';


const router = Router();


router.route('/match').post(matchScholarships);


export default router;
