import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Blogs({ image, heading, paragraph }) {
  return (
    <div className=" w-[30%] h-[30%] ">
      <img src={image} alt="blog " className="w-[100%] " />
      <div className="bg-white mt-[-5%] mx-1 rounded">
        <h1 className="font-semibold text-xl py-[10%] font-suse  p-9">
          {heading}
        </h1>
        <h1 className="  font-suse px-9">{paragraph}</h1>
        <button className="items-center text-xl flex justify-center mx-10 mt-5 py-5">   Read more     
          <span className="mx-4">
            <FaArrowRightLong />
          </span>
        </button>
        
      </div>
    </div>
  );
}

export default Blogs;
