import React, { useState } from "react";
import { MdOutlineReadMore } from "react-icons/md";
import google from "../photos/google.png"
import ball from "../photos/ball.png"
import apple from "../photos/apple.png"
import pinterest from "../photos/pinterest.png"
import whatsapp from "../photos/whatsapp.png"
import spotify from "../photos/spotify.png"
function OurFeatures() {
  const [item, setItem] = useState([
    {
      buttons: ["Full time", "Glendate, CA"],
      image:spotify,
      heading: "Product Manager",
      sales: "Marketing",
      price: "$3,000 - 5,000 / Monthly",
    },
    {
      buttons: ["Full time", "Glendate, CA"],
      image: pinterest,
      heading: "Product Manager",
      sales: "Marketing",
      price: "$3,000 - 5,000 / Monthly",
    },
    {
      buttons: ["Full time", "Glendate, CA"],
      image: google,
      heading: "Product Manager",
      sales: "Marketing",
      price: "$3,000 - 5,000 / Monthly",
    },
    {
      buttons: ["Full time", "Glendate, CA"],
      image:apple,
      heading: "Product Manager",
      sales: "Marketing",
      price: "$3,000 - 5,000 / Monthly",
    },
    {
      buttons: ["Full time", "Glendate, CA"],
      image: whatsapp,
      heading: "Product Manager",
      sales: "Marketing",
      price: "$3,000 - 5,000 / Monthly",
    },
    {
      buttons: ["Full time", "Glendate, CA"],
      image: ball,
      heading: "Product Manager",
      sales: "Marketing",
      price: "$3,000 - 5,000 / Monthly",
    },
  ]);

  return (
    <div>
      <div className="flex justify-between mx-[5%] ">
      <h1 className="text-[6vh] font-merriweather my-[2%]">Our Features</h1>
      <div className="flex justify-center items-center">
      <button className="flex justify-center items-center w-[11vw] py-2  text-xl bg-black text-white rounded-3xl">view more <span className="text-[3vh] ml-5 "><MdOutlineReadMore /></span> </button>
      </div>
      
      </div>
      
      <div className="grid grid-cols-3  gap-[3vw] mx-[10%]">
        {item.map((item) => {
          return (
            <div key={item.id}>
              <div className="  h-[31vh] rounded-xl bg-white">
                <div className="flex justify-start mx-[10%] ">
                  {item.buttons.map((item, index) => {
                    return (
                      <div key={index}>
                        <button className="rounded-2xl w-[7vw] mx-[5px] mt-[4vh] py-[3%] border border-black">
                          {item}
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-start mx-[15%] mt-[9%] items-center">
                  <img
                    src={item.image}
                    alt=""
                    className="size-[50px]"
                  />
                  <h2 className="font-merriweather text-[20px] mx-[7%] font-bold">
                    {item.heading}
                  </h2>
                </div>
                <h1 className="mt-[10%] mx-20 font-medium">
                  {item.sales}
                  <span> | {item.price}</span>
                </h1>
                <div className="flex justify-center">
                  <button className="w-[90%] rounded-3xl border border-black mt-[4vh] py-1 text-xl">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurFeatures;
