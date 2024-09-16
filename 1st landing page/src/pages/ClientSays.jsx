import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import ProfileCards from "../cards/ProfileCards";
import amir from "../photos/amir.png";
import usman from "../photos/usman.png";
import ali from "../photos/ali.png";

function ClientSays() {
  const [ClientSays, setClientSays] = useState([
    {
      image: amir,
      name: "Ali",
      profession: "designer",
      stars: "",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa exercitationem pariatur ut expedita veniam , nihil provident eius ut cupiditate similique libero molestias reiciendis, cumque nemo placeat exercitationem! Dicta tempora delectus nulla dolore.",
    },
    {
      image: usman,
      name: "Francis Guzman",
      profession: "web developer",
      stars: "",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa exercitationem pariatur ut expedita veniam , nihil provident eius ut cupiditate similique libero molestias reiciendis, cumque nemo placeat exercitationem! Dicta tempora delectus nulla dolore.",
    },
    {
      image: ali,
      name: "wilma taylor",
      profession: "devOps",
      stars: "",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa exercitationem pariatur ut expedita , nihil provident eius ut cupiditate similique libero molestias reiciendis, cumque nemo placeat exercitationem! Dicta tempora delectus nulla dolore.",
    },
    {
      image: usman,
      name: "Mandy Owens",
      profession: "Design",
      stars: "",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa exercitationem pariatur ut expedita veniam , nihil provident eius ut cupiditate similique libero molestias reiciendis, cumque nemo placeat exercitationem! Dicta tempora delectus nulla dolore.",
    },
  ]);

  return (
    <div className="text-center px-4 sm:px-6 lg:px-8">
      <h1 className="my-11 font-merriweather text-[4rem] sm:text-[5rem] md:text-[6rem]">Client Says</h1>
      <div className="flex flex-wrap justify-center gap-8 mx-4 sm:mx-6 lg:mx-8">
        {ClientSays.map((item, index) => (
          <div 
            key={index}
            className="relative bg-white rounded-lg shadow-lg p-4 w-full sm:w-[45%] md:w-[30%] lg:w-[22%]"
          >
            <img 
              src={item.image} 
              alt="" 
              className="absolute w-[20%] sm:w-[15%] md:w-[10%] top-[-20px] left-[10px] rounded-full border-2 border-gray-200"
            />
            <div className="pt-12">
              <h1 className="font-merriweather text-xl sm:text-2xl">{item.name}</h1>
              <h2 className="font-light text-gray-600">{item.profession}</h2>
              <p className="mt-2 text-gray-800">{item.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center py-10">
        <button className="text-xl flex items-center text-white bg-black px-6 py-3 rounded-full">
          See More
          <span className="ml-3">
            <FaArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
}

export default ClientSays;
