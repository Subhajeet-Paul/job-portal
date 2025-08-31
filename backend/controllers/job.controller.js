import {Job} from "../models/job.model.js";

//admin job post
export const postJobs = async (req, res) => {
    try {
        const { title, description, location, salary, requirements, companyId, experience, jobType ,position} = req.body;
        const userId = req.id;
        if (!title || !description || !location || !salary || !requirements || !companyId || !experience || !jobType || !position) {
            return res.status(400).json({
                message: "All fields are required",
                success: false,
            })
        }
        const job= await Job.create({
            title,
            description,
            location,
            salary: Number(salary),
            requirements: requirements.split(","),
            // companyId,
            experience: experience,
            jobType,
            position,
            company:companyId,
            created_by: userId,
        })
        return res.status(200).json({
            message: "Job posted successfully",
            success: true,
            job,
        })
    } catch (error) {
        console.log(error);
        
    }
}

//for students

export const getAllJobs = async (req, res) => {
    try {
        const keyword= req.query.keyword || "";
        const query={
            $or:[
                {title:{$regex:keyword, $options:"i"}},
                {description:{$regex:keyword, $options:"i"}},
                // {requirements:{$regex:keyword, $options:"i"}},
            ]
        };
        const jobs= await Job.find(query).populate({
            path:"company",
        }).sort({createdAt:-1});
        if(!jobs){
            return res.status(404).json({
                message: "No jobs found",
                success: false,
            })
        }
        return res.status(200).json({
            jobs,
            success: true,
        })
    } catch (error) {
        console.log(error);
        
    }
}


//for students
export const getJobById = async (req, res) => {
    try {
        const id = req.params.id;
        const job= await Job.findById(id);
        if(!job){
            return res.status(404).json({
                message: "Job not found",
                success: false,
            })
        }
        return res.status(200).json({
            job,
            success: true,
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const getadminJobs = async (req, res) => {
    try {
        const adminId = req.id;
        const jobs = await Job.find({created_by: adminId});
        if(!jobs){
            return res.status(404).json({
                message: "No jobs found",
                success: false,
            })
        }
        return res.status(200).json({
            jobs,
            success: true,
        })
    } catch (error) {
        console.log(error);
        
    }
}

