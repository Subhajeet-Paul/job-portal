import bcrypt from "bcrypt";
import {User} from "../models/user.model.js";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
    try {
        const {fullname, password, email, phone,role} = req.body;
        if(!fullname || !password || !email || !phone || !role){
            return res.status(400).json({
                message: "All fields are required",
                success: false,
            });
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message: "User already exists",
                success: false,
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            fullname,
            email,
            phone,
            password: hashedPassword,
            role,
        });
        return res.status(201).json({
            message: "User created successfully",
            success: true,
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const login = async (req, res) => {
    try {
        const {email, password,role} = req.body;
        if(!email ||!password ||!role){
            return res.status(400).json({
                message: "All fields are required",
                success: false,
            });
        }
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message: "User does not exist",
                success: false,
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({
                message: "Invalid credentials",
                success: false,
            })
        }
        if(user.role !== role){
            return res.status(400).json({
                message: "Account does not exists with current role",
                success: false,
            })
        }
        const tokenData={
            userId:user._id,
        }
        user={
            _id:user._id,
            fullname:user.fullname,
            email:user.email,
            phone:user.phone,
            role:user.role,
            profile:user.profile,
        }
        const token = jwt.sign(tokenData,process.env.JWT_SECRET,{expiresIn:"1d"});
        return res.status(200).cookie("token",token,{maxAge:1000*60*60*24,httpsOnly:true,sameSite:true}).json({
            message: `welcome back ${user.fullname}`,
            success: true,
            user,
        })

    } catch (error) {
        console.log(error);
        
    }
}
export const logout = (req,res)=>{
    try {
        res.status(200).cookie("token","",{maxAge:0})
        .json({
            message: "User logged out successfully",
            success: true,
        })
    } catch (error) {
        console.log(error);

    }
}
export const updateProfile = async (req,res)=>{
    try {
        const {fullname,email,phone,bio,skills} = req.body;
        const file = req.file;
        
        //cloudinary upload
        let skillsArray;
        if(skills){
            skillsArray = skills.split(",");
        }
        
        const userId = req.id;
        let user = await User.findById(userId);
        if(!user){
            return res.status(400).json({
                message: "User does not exist",
                success: false,
            })
        }
        if(fullname) user.fullname = fullname
        if(email) user.email = email
        if(phone) user.phone = phone
        if(bio) user.profile.bio = bio
        if(skills) user.profile.skills = skillsArray

        //resume comes here
        await user.save();
        user={
            _id:user._id,
            fullname:user.fullname,
            email:user.email,
            phone:user.phone,
            role:user.role,
            profile:user.profile,
        }
        return res.status(200).json({
            message: "Profile updated successfully",
            success: true,
            user,
        })
    } catch (error) {
        console.log(error);
        
    }
}