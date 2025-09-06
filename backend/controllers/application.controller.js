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

export const getAppliedJobs = async (req, res) => {
    try {
        const userId = req.id;
        const applications = await Application.find({applicant: userId}).sort({createdAt: -1}).populate({
            path: "job_id",
            options:{sort:{createdAt: -1}},
            populate:{
                path: "company",
                options:{sort:{createdAt: -1}},
            }
        });
        if(!applications){
            return res.status(404).json({
                message: "No applications found",
                success: false,
            });
        }
        return res.status(200).json({
            applications,
            success: true,
        });
    } catch (error) {
        console.log(error);
        
    }
}

export const getApplicants = async (req, res) => {
    try {
        const jobId = req.params;
        const job = await Job.findById(jobId).populate({
            path: "applications",
            populate:{
                path: "applicant",
                options:{sort:{createdAt: -1}},
            }
        });
        if(!job){
            return res.status(404).json({
                message: "Job not found",
                success: false,
            });
        }
        return res.status(200).json({
            job,
            success: true,
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const updateStatus = async (req, res) => {
    try {
        const {status} = req.body;
        const applicationId = req.params.id;
        const application = await Application.findOne({_id:applicationId});
        if(!status){
            return res.status(400).json({
                message: "Status is required",
                success: false,
            });
        }
        if(!application){
            return res.status(404).json({
                message: "Application not found",
                success: false,
            });
        }
        application.status = status;
        await application.save();
        return res.status(200).json({
            message: "Application updated successfully",
            success: true,
        })

    } catch (error) {
        console.log(error);
        
    }
}