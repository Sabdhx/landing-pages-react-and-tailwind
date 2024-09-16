import React from 'react'
import One from "../images/one.png";
import Two from "../images/two.png";
import three from "../images/three.png";
function SecondAfter() {
  const mapping = [
    {image:One , heading:"Light, Fast & Powerful", paragraph:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."},
    {image:Two , heading:"Light, Fast & Powerful", paragraph:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."},
    {image:three , heading:"Light, Fast & Powerful", paragraph:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."},
  ]
  return (
    <div>
      {
        mapping.map((item, index) => {
          return (
            <>
            <div className="flex justify-center my-[10%] mx-[10%]" key={index} >
                 <div className='flex-1 '>
                  <div className='flex justify-center'>
                  <img src={item.image} alt="" />
                    
                  </div>
                 </div>
                 <div className='flex-1 '>
                  
                  <h1 className='text-[4vh] font-semibold py-10'>{item.heading}</h1>
                  <h1 className='text-purple  pr-[14%]'>{item.paragraph}</h1>
                 
                  
                 </div>
            </div>
            </>
          )
        })
      }
    </div>
  )
  
}
export default SecondAfter;