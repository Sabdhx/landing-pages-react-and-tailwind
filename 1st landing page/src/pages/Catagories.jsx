import React, { useState } from 'react';
import one from "../photos/one.png";
import t from "../photos/t.png";
import th from "../photos/th.png";
import f from "../photos/f.png";
import fi from "../photos/fi.png";
import s from "../photos/s.png";

function Catagories() {
  const [catagories, setCatagories] = useState([
    { image: one, name: "Web Design" },
    { image: t, name: "Web Development" },
    { image: th, name: "Marketing" },
    { image: f, name: "Data Entry" },
    { image: fi, name: "Software Engineer" },
    { image: s, name: "Graphic Design" },
  ]);

  return (
    <div className='text-center'>
      <h1 className='my-11 font-merriweather text-[6vh] mt-[5%]'>Our Categories</h1>

      <div className='flex flex-wrap justify-center gap-8 items-center px-4 sm:px-6 md:px-8 lg:px-12'>
        {catagories.map((item, index) => {
          return (
            <div 
              key={index} 
              className='bg-white border border-black w-[80%] sm:w-[45%] md:w-[30%] lg:w-[20%] items-center rounded-3xl p-4 sm:p-6'>
              <div className='flex justify-center'>
                <img 
                  src={item.image} 
                  alt="" 
                  className='mb-4 w-[20vw] sm:w-[15vw] md:w-[10vw] lg:w-[8vw] h-auto rounded-full bg-gray-100 p-2' 
                />
              </div>
              <h1 className='font-bold font-sans'>{item.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Catagories;
