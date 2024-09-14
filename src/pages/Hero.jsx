import React from "react";
import bulb from "../photos/bulb.png";
import aeroplane from "../photos/aeroplane.png";

function Hero() {
  return (
    <>
      <div className="flex justify-center items-center gap-20 my-[4%] ">
       <div className="flex justify-center items-center gap-20 my-[4%] mt-[3%]">

      
        <div>
          <img src={bulb} alt="" />
        </div>
        <div>
          <h1 className="text-[100px] text-center font-merriweather ">
            Get your dream job <br /> with Find job
          </h1>
          <h1 className="text-center  text-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h1>
        </div>
        <div>
          <img src={aeroplane} alt="" />
        </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
