import React from 'react'
import background from "../images/background.png"
function Last() {
  return (
    <div
    className="text-center mt-[10%] bg-cover bg-center  relative py-[5%]"
    style={{ backgroundImage: `url(${background})` }}
  >
      <h1 className='text-2xl font-semibold '>A Price To Suit Everyone</h1>
      <p className='px-[30%] py-7'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
      <h1 className='text-2xl font-semibold'>$40</h1>
      <h1>UI Design Kit</h1>
      <h1 className='mt-10'>See, One price. Simple.</h1>
      <button className="bg-blue text-white px-[5%] py-1 mt-2 ">Purchase</button>
      
    </div>
  )
}

export default Last