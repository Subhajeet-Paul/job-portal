import express from "express";
import {postJobs, getAllJobs,getJobById,getadminJobs} from "../controllers/job.controller.js"
import isAuthenticated from "../middlewares/isAuthenticated.js"

const router = express.Router();

router.route("/post").post(isAuthenticated,postJobs);
router.route("/get").get(isAuthenticated,getAllJobs);
router.route("/get/:id").get(isAuthenticated,getJobById);
router.route("/getadminjobs").get(isAuthenticated,getadminJobs);

export default router;