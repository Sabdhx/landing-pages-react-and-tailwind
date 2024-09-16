import React, { useState } from "react";
import { MdOutlineReadMore } from "react-icons/md";
import google from "../photos/google.png";
import ball from "../photos/ball.png";
import apple from "../photos/apple.png";
import pinterest from "../photos/pinterest.png";
import whatsapp from "../photos/whatsapp.png";
import spotify from "../photos/spotify.png";

function OurFeatures() {
  const [item, setItem] = useState([
    {
      buttons: ["Full time", "Glendate, CA"],
      image: spotify,
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
      image: apple,
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
      <div className="flex flex-col items-center mx-4 md:mx-10 lg:mx-20 my-4">
        <h1 className="text-[5vh] md:text-[6vh] font-merriweather my-4 text-center">
          Our Features
        </h1>
        <button className="flex items-center justify-center w-full max-w-xs py-2 text-xl bg-black text-white rounded-3xl">
          View More
          <span className="text-[2vh] ml-3">
            <MdOutlineReadMore />
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 lg:px-20">
        {item.map((feature, index) => (
          <div key={index} className="h-auto rounded-xl bg-white p-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {feature.buttons.map((btn, idx) => (
                <button
                  key={idx}
                  className="rounded-2xl w-auto py-1 px-3 border border-black text-sm"
                >
                  {btn}
                </button>
              ))}
            </div>
            <div className="flex items-center mb-4">
              <img
                src={feature.image}
                alt=""
                className="w-[50px] h-[50px] mr-4"
              />
              <h2 className="font-merriweather text-lg font-bold">
                {feature.heading}
              </h2>
            </div>
            <h1 className="text-base font-medium mb-4">
              {feature.sales}
              <span> | {feature.price}</span>
            </h1>
            <div className="flex justify-center">
              <button className="w-full max-w-xs rounded-3xl border border-black py-2 text-base">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurFeatures;
