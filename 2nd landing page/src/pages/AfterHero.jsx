import React from "react";
import { MdLibraryBooks } from "react-icons/md";
import { RiContactsBookUploadFill } from "react-icons/ri";
import girl from "../images/girl.png"

function AfterHero() {
  return (
    <div className="flex justify-center relative z-10 mt-[14%]">
      <div className="flex-1 px-[10%]">
        <h1 className="text-[4vh] font-semibold">Light, Fast & Powerful</h1>
        <p className="text-1xl mt-8 text-purple">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, <br /> <br />nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <div className="flex justify-between w-[100%]  mt-[9%]">

          <div className="w-[50%] ">
            <h1 className="text-[6vh] ">
              <MdLibraryBooks />
            </h1>
            <h1 className="text-xl py-2 font-medium">Title Goes Here</h1>
            <h1 className="text-purple pr-[10%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo placeat aliquam commodi, vero dignissimos velit odio tempore ipsum iste earum.</h1>
          </div>
          
          <div className="w-[50%] ">
            <h1 className="text-[6vh] ">
              <RiContactsBookUploadFill />
            </h1>
            <h1 className="text-xl py-2 font-medium">Title Goes Here</h1>
            <h1 className="text-purple pr-[10%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo placeat aliquam commodi, vero dignissimos velit odio tempore ipsum iste earum.</h1>
          </div>

        </div>
      </div>
      <div className="flex-1">
        <img src={girl} alt="" />
      </div>
    </div>
  );
}

export default AfterHero;
