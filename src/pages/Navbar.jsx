import React from "react";
import { IoIosSend } from "react-icons/io";
function Navbar() {
  return (
    <div className="">
    <div className="h-[80px] flex justify-between items-center bg-gray-20 font-suse mx-20">
      <div className="text-2xl font-semibold">FIND JOBS</div>
      <div className="flex justify-center space-x-10 font-suse text-xl"> {/* Updated here */}
        <h1 className="">HOME</h1>
        <h1 className="">JOBS</h1>
        <h1 className="">CATEGORIES</h1>
        <h1 className="">BLOGS</h1>
        <h1 className="">TERMINALS</h1>
        <h1 className="">CONTACT US</h1>
      </div>
      <div className="flex gap-10 text-[20px]">
        <button>Browse jobs</button>
        <button className="mr-10 rounded-3xl bg-black text-white px-4 py-2 flex items-center font-semibold">
          Post a Job
          <span className="ml-4 font-semibold"><IoIosSend /></span>
        </button>
      </div>
    </div>
  </div>
  
  );
}

export default Navbar;
