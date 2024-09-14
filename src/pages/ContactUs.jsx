import React from 'react'

function ContactUs() {
  return (
    <>
    <h1 className="my-11 font-merriweather text-[6vh] text-center">
   Contact Us
  </h1>
  <div className=' '>
  <div className='w-[90vw] h-[60vh] bg-white rounded-3xl  py-20 flex'>
      <input type="text" className='bg-gray-200 w-[35%] mx-[10%] h-[9%] rounded-3xl px-[2%]' placeholder='First Name' />
      <input type="text" className='bg-gray-200 w-[35%] mx-[10%] h-[9%] rounded-3xl px-[2%]' placeholder='First Name' />
      
  </div>
  
  <div className=' rounded-3xl  py-20 flex'>
      <input type="text" className='bg-gray-200 w-[35%] mx-[10%] h-[9%] rounded-3xl px-[2%]' placeholder='First Name' />
      <input type="text" className='bg-gray-200 w-[35%] mx-[10%] h-[9%] rounded-3xl px-[2%]' placeholder='First Name' />
      
  </div>
  
  </div>
  </>
  )
}

export default ContactUs