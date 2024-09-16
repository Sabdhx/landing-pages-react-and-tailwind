import React from 'react';

function Navbar() {

  return (
    <div className='flex justify-between mx-[5%] text-blue relative'>
      <div className='flex justify-center gap-14 py-7'>
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Contact</h1>
      </div>
      
      <h1 className='mr-[9%] text-2xl font-bold py-7 relative z-10'>Landing</h1>

      <div className='py-7'>
        <button className='bg-blue text-white px-16 py-1 z-10 relative'>Buy now</button>
      </div>

     
    </div>
  );
}

export default Navbar;
