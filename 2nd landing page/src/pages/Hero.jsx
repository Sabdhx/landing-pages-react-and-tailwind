import React from "react";
import hero from "../images/hero.png"
function Hero() {
  return (
    <div className="flex justify-between flex-1 h-[80vh] py-[7%]">
      <div className="flex-1 py-[5%] px-[10%]">
        <h1 className="text-[5vh] font-semibold relative z-10">Introduce Your Product <br /> Quickly & Effectively</h1>
        <h1 className="py-9 px-[1%] relative z-10 text-purple" >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus <br /><br /> mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </h1>
        <button className="bg-blue text-white px-[5%] py-1  ">Purchase UI kit</button>
        <button className="text-blue mx-10 px-[5%] border-2 border-blue py-1 relative z-10 font-semibold">
  Learn More
</button>
      </div>
      <div className="flex-1/2 relative z-10">
        <img src={hero} alt="" />
      </div>
    </div>
  );
}

export default Hero;
