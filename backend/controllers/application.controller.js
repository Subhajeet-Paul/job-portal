import {Application} from "../models/application.model.js"
import {Job} from "../models/job.model.js"

export const applyJob = async (req, res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id;
        if(!jobId){
            return res.status(400).json({
                message: "Job id is required",
                success: false,
            });
        }
        const existingApplication = Application.findOne({
            job_id: jobId,
            applicant: userId,
        });
        if(existingApplication){
            return res.status(400).json({
                message: "You have already applied for this job",
                success: false,
            });
        }
        const job = await Job.findById(jobId);
        if(!job){
            return res.status(404).json({
                message: "Job not found",
                success: false,
            });
        }
        const newApplication = await Application.create({
            job_id: jobId,
            applicant: userId,
            
        });
        job.applications.push(newApplication._id);
        await job.save();
        return res.status(201).json({
            message: "Application created successfully",
            success: true,
        });
    } catch (error) {
        console.log(error);
        
    }
}