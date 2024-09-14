import React from "react";
import light from "../photos/light.png";
import plane from "../photos/plane.png";
import line from "../photos/line.png"
function ContactUs() {
  return (
    <>
      <h1 className="my-11 font-merriweather text-[6vh] text-center relative">
        Contact Us
      </h1>
      <div>
        <div className="h-[50vh] bg-white rounded-xl py-20 flex flex-wrap justify-center mx-[10%] gap-8">
          
          <input
            type="text"
            className="bg-gray-100 w-[35%] h-[9%] rounded-xl px-[2%]"
            placeholder="First Name"
          />
          <input
            type="text"
            className="bg-gray-100 w-[35%] h-[9%] rounded-xl px-[2%]"
            placeholder="Last Name"
          />
          <input
            type="email"
            className="bg-gray-100 w-[35%] h-[9%] rounded-xl px-[2%]"
            placeholder="Email"
          />
          <input
            type="tel"
            className="bg-gray-100 w-[35%] h-[9%] rounded-xl px-[2%]"
            placeholder="Phone Number"
          />

          {/* Full-width input at the end */}
          <textarea
            className="bg-gray-100 w-full h-[35%] rounded-xl px-[2%]  mx-[14%]"
            placeholder="Your Message"
          ></textarea>

          <img src={light} alt="light" className="absolute w-[9vw] mt-[20vh] ml-[-80%]" />
          <img src={plane} alt="plane" className="absolute w-[9vw] mt-[36vh] ml-[60%]" />
        </div>
      </div>
      <div className='flex justify-center mt-[5%] bg-purple-100'>
      <img src={line} alt="" />
    </div>
    </>
  );
}

export default ContactUs;

