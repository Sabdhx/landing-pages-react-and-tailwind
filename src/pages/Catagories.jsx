import React, { useState } from 'react'
import one from "../photos/one.png"
import t from "../photos/t.png"
import th from "../photos/th.png"
import f from "../photos/f.png"
import fi from "../photos/fi.png"
import s from "../photos/s.png"
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

      <div className='flex justify-center flex-wrap gap-8 items-center'> 
        {catagories.map((item, index) => {
          return (
            <div key={index} className='bg-white border border-black w-[13%] items-center rounded-3xl p-[3vh] '>
              <div className='flex justify-center'>
              <img src={item.image} alt="" className='mb-4 w-[4vw] h-[7vh]  rounded-full bg-gray-100 p-1' />
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
