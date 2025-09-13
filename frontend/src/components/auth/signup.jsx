import React from "react";
import Navbar from "../shared/navbar.jsx";
import { Label } from "@/components/ui/label";
import { Input } from "../ui/input.jsx";
// import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const signup = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign up</h1>
          <div className="my-2">
            <Label className="p-2">Full Name</Label>
            <Input type="text" placeholder="Name" />
          </div>
          <div className="my-2">
            <Label className="p-2">Email</Label>
            <Input type="email" placeholder="abc@gmail.com" />
          </div>
          <div className="my-2">
            <Label className="p-2">Phone No</Label>
            <Input type="number" placeholder="+91" />
          </div>
          <div className="my-2">
            <Label className="p-2">Password</Label>
            <Input type="password" placeholder="password" />
          </div>
          <div className="flex items-center justify-between ">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                type="radio"
                name="role"
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
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default signup;
