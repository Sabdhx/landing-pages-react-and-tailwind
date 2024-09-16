import React from "react";
import { CiSearch } from "react-icons/ci";
import people from "../photos/people.png";
import leave from "../photos/leave.png";

function AfterHero() {
  return (
    <>
      {/* Search bar */}
      <div className="flex justify-center items-center">
        <div className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] h-[50px] rounded-3xl flex items-center justify-between bg-white mt-[-9%] shadow-lg">
          <button className="text-[30px] sm:text-[40px] md:text-[50px] mx-2">
            <CiSearch />
          </button>
          <input 
            type="text" 
            className="mx-5 w-[70%] h-[80%] rounded-md focus:outline-none" 
            placeholder="Search..."
          />
          <button className="bg-black text-white text-lg md:text-2xl rounded-3xl px-5 sm:px-7 py-1 h-[95%]">
            Search
          </button>
        </div>
      </div>

      {/* Image section */}
      <div className="flex justify-between mt-7 mx-[5%] sm:mx-[9%]">
        {/* Leaves on the left */}
        <img
          src={leave}
          alt="leaves"
          className="w-[20%] sm:w-[15%] md:w-[10%] lg:w-[8%]"
        />

        {/* Main image */}
        <img
          src={people}
          alt="people"
          className="w-[60%] sm:w-[50%] md:w-[40%] lg:w-[35%]"
        />

        {/* Leaves on the right */}
        <img
          src={leave}
          alt="leaves"
          className="w-[20%] sm:w-[15%] md:w-[10%] lg:w-[8%]"
        />
      </div>
    </>
  );
}

export default AfterHero;
