import React from 'react';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { PiThreadsLogoFill } from "react-icons/pi";

function Footer() {
  return (
    <>
      {/* Main Footer Section */}
      <div className="bg-black text-white py-[6%] flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-[15%] px-[5%] lg:px-[10%] text-center lg:text-left">
        {/* Column 1 */}
        <div>
          <h1 className="my-3 font-merriweather">Company</h1>
          <h1 className="my-3 mt-6">Categories</h1>
          <h1 className="my-3">Blogs</h1>
          <h1 className="my-3">Testimonials</h1>
          <h1 className="my-3">Jobs</h1>
        </div>
        {/* Column 2 */}
        <div>
          <h1 className="my-3 font-merriweather">Help</h1>
          <h1 className="my-3 mt-6">Categories</h1>
          <h1 className="my-3">Blogs</h1>
          <h1 className="my-3">Testimonials</h1>
          <h1 className="my-3">Jobs</h1>
        </div>
        {/* Column 3 */}
        <div>
          <h1 className="my-3 font-merriweather">Resources</h1>
          <h1 className="my-3 mt-6">Categories</h1>
          <h1 className="my-3">Blogs</h1>
          <h1 className="my-3">Testimonials</h1>
          <h1 className="my-3">Jobs</h1>
        </div>
        {/* Column 4 */}
        <div>
          <h1 className="my-3 font-merriweather">Company</h1>
          <h1 className="my-3 mt-6">Categories</h1>
          <h1 className="my-3">Blogs</h1>
          <h1 className="my-3">Testimonials</h1>
          <h1 className="my-3">Jobs</h1>
        </div>
      </div>

      {/* Divider */}
      <div className="text-white bg-black">
        <hr className="mx-[10%] border-gray-600" />
      </div>

      {/* Bottom Section */}
      <div className="text-white font-bold bg-black flex flex-col lg:flex-row justify-between items-center px-[5%] lg:px-[9%] pt-10 pb-4 text-center lg:text-left">
        <h1 className="mb-4 lg:mb-0">Find Jobs</h1>
        <h1 className="mb-4 lg:mb-0">© Copyright 2024, All Rights Reserved by Findjobs</h1>
        <div className="flex justify-center mb-4 lg:mb-0">
          <h1 className="mx-2 text-xl"><FaFacebook /></h1>
          <h1 className="mx-2 text-xl"><AiFillTwitterCircle /></h1>
          <h1 className="mx-2 text-xl"><FaInstagram /></h1>
          <h1 className="mx-2 text-xl"><PiThreadsLogoFill /></h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
