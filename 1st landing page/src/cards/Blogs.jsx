import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Blogs({ image, heading, paragraph }) {
  return (
    <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] p-4">
      <img src={image} alt="blog" className="w-full h-auto rounded-t-xl" />
      <div className="bg-white mt-[-5%] rounded-b-xl p-4 shadow-lg">
        <h1 className="font-semibold text-lg md:text-xl lg:text-2xl py-2 font-suse">
          {heading}
        </h1>
        <p className="font-suse text-sm md:text-base lg:text-lg mb-4">
          {paragraph}
        </p>
        <button className="flex items-center text-sm md:text-base lg:text-xl font-semibold text-blue-500 hover:text-blue-700 mx-auto block py-2 px-4 border border-blue-500 rounded-lg">
          Read more
          <span className="ml-2">
            <FaArrowRightLong />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Blogs;
