import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='flex justify-between mx-[5%] text-blue relative'>
      {/* Landing title */}
      <h1 className='text-2xl font-bold py-7 relative z-10'>Landing</h1>

      {/* Menu for larger screens */}
      <div className='hidden sm:flex justify-center gap-14 py-7'>
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Contact</h1>
      </div>

      {/* Buy now button */}
      <div className='hidden sm:block py-7'>
        <button className='bg-blue text-white px-16 py-1 z-10 relative'>Buy now</button>
      </div>

      {/* Hamburger Icon for small screens */}
      <div className='sm:hidden flex items-center py-7'>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='z-10'>
          {/* Hamburger icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Slide-in Menu for small screens */}
      <div
        className={`fixed top-0 right-0 h-full bg-white text-black z-20 p-6 transition-transform duration-300 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } sm:hidden`}
      >
        {/* Cross Icon for closing menu */}
        <div className='flex justify-end'>
          <button onClick={() => setIsMenuOpen(false)} className='mb-4'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu items */}
        <h1 className='mb-5 cursor-pointer'>Home</h1>
        <h1 className='mb-5 cursor-pointer'>About</h1>
        <h1 className='mb-5 cursor-pointer'>Contact</h1>
        <button className='bg-blue text-white px-16 py-1'>Buy now</button>
      </div>
    </div>
  );
}

export default Navbar;
