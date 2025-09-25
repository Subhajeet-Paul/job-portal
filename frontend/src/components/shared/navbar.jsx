import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


// import {Link} from 'react-router-dom'
const Navbar = () => {
  const navigate= useNavigate();
  const {user} = useSelector(store=>store.auth);
  return (
    <div className="bg-white ">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job <span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <ul className="flex items-center font-medium gap-5 cursor-pointer">
            <li  onClick={()=>navigate("/")}>Home</li>
            <li onClick={()=>navigate("/jobs")}>Jobs</li>
            <li onClick={()=>navigate("/browse")}>Browse</li>
          </ul>
          {!user ? (
            <div>
              <Link to="/login">
              <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
              <Button variant="outline" className="bg-[#6A3BC2] hover:bg-[#533e7b]">Signup</Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div>
                  <div className="flex gap-4 space-y-2">
                    <Avatar className="cursor-pointer">
                      <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                    <div>
                      <h4 className="font-medium">subhajeet</h4>
                      <p className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 text-gray-600">
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2 />
                      <Button variant="link"><Link to="/profile">view profile</Link></Button>
                    </div>
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <LogOut />
                      <Button variant="link">logout</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
