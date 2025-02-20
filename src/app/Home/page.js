import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'

function page() {
  return (
    <>
             <div className='Home-page w-screen h-screen relative bg-white overflow-x-hidden'>
             <Navbar/>


             <section className='hero-section w-screen h-full text-black flex justify-items-center relative '>

          
<Image src='/bg.jpg' alt='background-image' layout='fill' objectFit='cover'/>
<p className="w-1/2 absolute flex items-center justify-center top-0 left-0 text-6xl text-left px-2 text-white h-full">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
</p>




             </section>







             </div>








    </>
  )
}

export default page