import React from "react";
import bulb from "../photos/bulb.png";
import aeroplane from "../photos/aeroplane.png";

function Hero() {
  return (
    <>
      <div className="flex flex-col items-center my-4 sm:my-8 md:my-12 lg:my-16">
        <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 mx-4 sm:mx-6 md:mx-8 lg:mx-12">
          
          <div className="flex justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <div>
              <img src={bulb} alt="Bulb" className="w-[40vw] sm:w-[30vw] md:w-[25vw] lg:w-[20vw]" />
            </div>
            <div className="text-center">
              <h1 className="text-[6rem] sm:text-[7rem] md:text-[8rem] lg:text-[10rem] font-merriweather">
                Get your dream job <br /> with Find job
              </h1>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </h1>
            </div>
            <div>
              <img src={aeroplane} alt="Aeroplane" className="w-[40vw] sm:w-[30vw] md:w-[25vw] lg:w-[20vw]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
