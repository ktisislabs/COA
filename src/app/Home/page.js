
'use client'

import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { useState } from 'react';
import Disclaimer from '../components/Disclaimer';



function Page() {

const [popup,setPopUp] = useState(false) ; 

useEffect(()=>{

  const timer = setTimeout(()=>{
    setPopUp(true)

  },1000)


  return()=>{clearTimeout(timer)}

},[])

const handleClosePopUp=()=>{
  setPopUp(false) ; 
}



  return (
    <>
   
    <div className='home-page w-screen h-screen relative bg-white overflow-x-hidden'>
    {popup===true?(<Disclaimer handleClosePopUp={handleClosePopUp}/>):null}
      <Navbar />
      <section className='hero-section w-screen h-full text-black flex justify-center items-center relative'>
        <Image src='/bg.jpg' alt='background image' layout='fill' objectFit='cover' className='z-0' />
        <div className='absolute z-10 flex flex-col items-start justify-center w-1/2 h-full left-12 text-white'>
          <p className='text-6xl font-bold leading-tight'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <button className='mt-6 px-6 py-3 bg-white text-black font-sans font-medium text-lg rounded-lg shadow-lg hover:bg-[#EFF3EA]'>
            Book an appointment
          </button>
        </div>
      </section>
      <section  className='Section-2 w-screen h-[40vh] flex flex-col  items-center justify-center'>
      <p className='text-3xl font-bold text-black font-sans my-5'>WELCOME</p>
      <p className='text-center text-black text-xl font-sans font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      <br></br>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br></br>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br></br>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      </section>


      <section className='SEction-3 w-screen h-[70vh] bg-[#EFF3EA]'>

      </section>
    
    </div>
    </>
  );
}

export default Page;
