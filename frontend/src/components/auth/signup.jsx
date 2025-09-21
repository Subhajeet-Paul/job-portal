import React, { useState } from "react";
import Navbar from "../shared/navbar.jsx";
import { Label } from "@/components/ui/label";
import { Input } from "../ui/input.jsx";
// import { Label } from "@/components/ui/label"
import { RadioGroup } from "@/components/ui/radio-group";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "@/utils/constant.js";
import { toast } from "sonner";
import axios from "axios";
const signup = () => {
  const navigate= useNavigate()
  const [input, setInput] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
    role: "",
    file: "",
  });

  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const changeFileHandler = (e) => {
    setInput({
      ...input,
      file: e.target.files[0],
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("phone", input.phone);
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`,formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if(res.data.success){
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign up</h1>
          <div className="my-2">
            <Label className="p-2">Full Name</Label>
            <Input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder="Name"
            />
          </div>
          <div className="my-2">
            <Label className="p-2">Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="abc@gmail.com"
            />
          </div>
          <div className="my-2">
            <Label className="p-2">Phone No</Label>
            <Input
              type="text"
              value={input.phoneNumber}
              name="phone"
              onChange={changeEventHandler}
              placeholder="+91"
            />
          </div>
          <div className="my-2">
            <Label className="p-2">Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="password"
            />
          </div>
          <div className="flex items-center justify-between ">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  value="student"
                  className="cursor-pointer"
                />
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input
                accept="image/*"
                type="file"
                name="file"
                onChange={changeFileHandler}
                className="cursor-pointer"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full my-4 p-2 text-white rounded-sm bg-blue-800"
          >
            Sign Up
          </button>
          <span>
            <Link to="/login" className="text-blue-600">
              Already have an account? login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default signup;
