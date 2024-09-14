import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import ProfileCards from "../cards/ProfileCards";
import amir from "../photos/amir.png"
import usman from "../photos/usman.png"
import ali from "../photos/ali.png"
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
    <div>
      <h1 className="my-11 font-merriweather text-[6vh] text-center mt-[5%]">
        Client Says
      </h1>
      <div className="flex  gap-[3%] mx-[5%] ">
        {ClientSays.map((item, index) => (
          <div className="relative">
          <img src={item.image} alt=""  className="absolute w-[3vw] h-[5vh] mt-[14%] ml-[-8%]"/>
          <div className="bg-white">
          <h1 className="font-merriweather pt-6 px-10 text-xl">{item.name}</h1>
          <h1 className="font-extralight pt-3 px-10">{item.profession}</h1>
          <h1 >{item.stars}</h1>
          <h1 className="px-9 py-3">{item.paragraph}</h1>
          </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center py-20">
        <button className="text-xl flex justify-center items-center text-white bg-black px-4 py-2 rounded-3xl">
          See More{" "}
          <span className="ml-3">
            <FaArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
}

export default ClientSays;
