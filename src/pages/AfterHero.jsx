import React from "react";
import { CiSearch } from "react-icons/ci";
import people from "../photos/people.png";
import leave from "../photos/leave.png"
function AfterHero() {
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="w-[40%] h-[50px]  rounded-3xl flex items-center justify-between bg-white mt-[-9%]">
          <button className="text-[50px] mx-2 ">
            <CiSearch />
          </button>
          <input type="text" className="mx-5 w-[70%] h-[80%] rounded-md " />
          <button className="bg-black text-white text-2xl rounded-3xl px-7 py-1 h-[95%]">
            Search
          </button>
        </div>
      </div>
      <div className="flex justify-between mt-7 mx-[9%]">
        <img src={leave} alt="" className="size-[15%]"/>
        <img src={people} alt="" className="size-[60%]"/>
        <img src={leave} alt="" className="size-[15%]" />
      </div>
    </>
  );
}

export default AfterHero;
