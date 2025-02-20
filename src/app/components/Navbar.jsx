import React from 'react'


function Navbar() {
  return (
    <>
    <nav className='Navbar flex items-center justify-between w-full m-0 bg-[#EFF3EA] p-3 '>

    <span className='Logo-div'>
    <p className="text-black text-xl flex items-center sm:text-2xl md:text-xl font-roboto font-semibold text-center">
          CHAMBERS OF ANIRUDDHA
        </p>
       
    </span>

    <ul className='Nav-items flex items-center gap-5 text-black'>
    <li className='font-medium font-sans cursor-pointer hover:text-gray-500'>ABOUT US</li>
    <li className='font-medium font-sans cursor-pointer hover:text-gray-500'>SERVICES </li>
    <li className='font-medium font-sans cursor-pointer hover:text-gray-500'>CONTACT US</li>

    </ul>

    <button className='cta-btn  rounded-xl font-sans font-semibold bg-black text-white p-3 hover:bg-transparent hover:border hover:border-black hover:text-black'>BOOK AN APPOINTMENT</button>

    </nav>

    </>
  )
}

export default Navbar ; 