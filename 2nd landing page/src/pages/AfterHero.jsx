import React from "react";
import { MdLibraryBooks } from "react-icons/md";
import { RiContactsBookUploadFill } from "react-icons/ri";
import girl from "../images/girl.png";

function AfterHero() {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center relative z-10 mt-[14%] px-5 lg:px-10">
      {/* Text Section */}
      <div className="flex-1 px-[5%] lg:px-[10%]">
        <h1 className="text-[3vh] sm:text-[4vh] font-semibold">Light, Fast & Powerful</h1>
        <p className="text-base sm:text-lg mt-8 text-purple">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, <br /> <br /> nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <div className="flex flex-col md:flex-row justify-between w-full mt-10 gap-8">
          {/* First Icon Section */}
          <div className="w-full md:w-[50%]">
            <h1 className="text-[6vh]">
              <MdLibraryBooks />
            </h1>
            <h1 className="text-xl py-2 font-medium">Title Goes Here</h1>
            <p className="text-purple pr-[5%] sm:pr-[10%]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo placeat aliquam commodi, vero dignissimos velit odio tempore ipsum iste earum.
            </p>
          </div>

          {/* Second Icon Section */}
          <div className="w-full md:w-[50%]">
            <h1 className="text-[6vh]">
              <RiContactsBookUploadFill />
            </h1>
            <h1 className="text-xl py-2 font-medium">Title Goes Here</h1>
            <p className="text-purple pr-[5%] sm:pr-[10%]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo placeat aliquam commodi, vero dignissimos velit odio tempore ipsum iste earum.
            </p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center lg:justify-end mt-10 lg:mt-0">
        <img src={girl} alt="Girl" className="w-[80%] sm:w-[60%] lg:w-[90%]" />
      </div>
    </div>
  );
}

export default AfterHero;
