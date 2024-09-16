import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Desktop Navbar */}
      <div className="hidden md:flex h-[80px] justify-between items-center bg-gray-20 font-suse mx-20">
        <div className="text-2xl font-semibold">FIND JOBS</div>
        <div className="flex justify-center space-x-10 font-suse text-xl">
          <h1>HOME</h1>
          <h1>JOBS</h1>
          <h1>CATEGORIES</h1>
          <h1>BLOGS</h1>
          <h1>TERMINALS</h1>
          <h1>CONTACT US</h1>
        </div>
        <div className="flex gap-10 text-[20px]">
          <button>Browse jobs</button>
          <button className="mr-10 rounded-3xl bg-black text-white px-4 py-2 flex items-center font-semibold">
            Post a Job
            <span className="ml-4 font-semibold"><IoIosSend /></span>
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center p-4 bg-gray-20">
        <div className="text-2xl font-semibold">FIND JOBS</div>
        <button onClick={toggleSidebar} className="text-2xl">
          <AiOutlineMenu />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-gray-200 text-black transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4">
          <div className="text-2xl font-semibold">FIND JOBS</div>
          <button onClick={toggleSidebar} className="text-2xl">
            <AiOutlineClose />
          </button>
        </div>
        <div className="flex flex-col items-start p-4 space-y-4 text-xl">
          <h1>HOME</h1>
          <h1>JOBS</h1>
          <h1>CATEGORIES</h1>
          <h1>BLOGS</h1>
          <h1>TERMINALS</h1>
          <h1>CONTACT US</h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
