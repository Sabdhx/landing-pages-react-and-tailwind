import React from "react";
import hero from "../images/hero.png";

function Hero() {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center h-auto lg:h-[80vh] py-[7%]">
      {/* Text Section */}
      <div className="flex-1 py-[5%] px-5 lg:px-[10%]">
        <h1 className="text-[4vh] lg:text-[5vh] font-semibold relative z-10">
          Introduce Your Product <br /> Quickly & Effectively
        </h1>
        <p className="py-5 lg:py-9 px-2 lg:px-[1%] relative z-10 text-purple text-sm lg:text-base">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. <br /><br />
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. felis, ultricies nec, pellentesque
          eu, pretium quis, sem. Nulla consequat massa quis enim.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-blue text-white px-[5%] py-1">Purchase UI kit</button>
          <button className="text-blue px-[5%] border-2 border-blue py-1 relative z-10 font-semibold">
            Learn More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 lg:flex-1/2 relative z-10 w-full lg:w-auto">
        <img
          src={hero}
          alt="Hero"
          className="w-full h-auto object-cover lg:block hidden" 
        />
      </div>
    </div>
  );
}

export default Hero;
