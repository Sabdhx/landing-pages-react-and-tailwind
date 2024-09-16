import React from "react";
import light from "../photos/light.png";
import plane from "../photos/plane.png";
import line from "../photos/line.png";

function ContactUs() {
  return (
    <>
      <h1 className="my-11 font-merriweather text-[4rem] sm:text-[5rem] md:text-[6rem] text-center relative">
        Contact Us
      </h1>
      <div className="relative">
        <div className="h-auto bg-white rounded-xl py-10 flex flex-wrap justify-center mx-4 sm:mx-6 lg:mx-10 gap-6 sm:gap-8">
          <input
            type="text"
            className="bg-gray-100 w-full sm:w-[45%] lg:w-[30%] h-[9%] rounded-xl px-4 py-2"
            placeholder="First Name"
          />
          <input
            type="text"
            className="bg-gray-100 w-full sm:w-[45%] lg:w-[30%] h-[9%] rounded-xl px-4 py-2"
            placeholder="Last Name"
          />
          <input
            type="email"
            className="bg-gray-100 w-full sm:w-[45%] lg:w-[30%] h-[9%] rounded-xl px-4 py-2"
            placeholder="Email"
          />
          <input
            type="tel"
            className="bg-gray-100 w-full sm:w-[45%] lg:w-[30%] h-[9%] rounded-xl px-4 py-2"
            placeholder="Phone Number"
          />

          {/* Full-width input at the end */}
          <textarea
            className="bg-gray-100 w-full h-[20vh] sm:h-[25vh] lg:h-[35vh] rounded-xl px-4 py-2 mx-4 sm:mx-6 lg:mx-10"
            placeholder="Your Message"
          ></textarea>

          <img src={light} alt="light" className="absolute w-[20%] sm:w-[15%] md:w-[10%] top-[10%] left-[-10%] sm:top-[20%] sm:left-[-20%] md:top-[20%] md:left-[-10%]" />
          <img src={plane} alt="plane" className="absolute w-[20%] sm:w-[15%] md:w-[10%] top-[30%] right-[-10%] sm:top-[40%] sm:right-[-20%] md:top-[40%] md:right-[-10%]" />
        </div>
      </div>
      <div className="flex justify-center mt-10 bg-purple-100">
        <img src={line} alt="" className="w-full max-w-screen-xl" />
      </div>
    </>
  );
}

export default ContactUs;
