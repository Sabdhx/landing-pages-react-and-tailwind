import React from 'react'

function Footer() {
  return (
    <div className='flex justify-between mx-[5%] text-blue relative py-10'>
    <div className='flex justify-center  py-7 items-center'>
      <h1>©2023 Yourcompany</h1>
      
    </div>
    
    <h1 className=' text-2xl font-bold py-7 relative z-10 '>Landing</h1>

    <div className='py-7'>
      <button className='bg-blue text-white px-16 py-1 z-10 relative'>Buy now</button>
    </div>

   
  </div>
  )
}

export default Footer