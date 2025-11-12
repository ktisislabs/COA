'use client'

import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, PhoneCall, Car, CheckCircle2 } from "lucide-react";
import Footer from '../components/Footer'
import { useRouter } from 'next/navigation'

function Page() {

const router = useRouter() 

  return (
    <>
      <div className="home-page w-screen min-h-screen relative z-10 bg-white overflow-x-hidden">
        <Navbar />

        {/* ---------------- HERO SECTION ---------------- */}
        <section className="hero-section relative w-screen h-screen flex justify-center items-center overflow-hidden">
          <Image
            src="/bg.jpg"
            alt="background image"
            fill
            className="z-0 object-cover brightness-90"
            priority
          />

          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-5" />

          {/* Floating animated shapes */}
          <motion.div
            className="absolute top-20 right-24 w-40 h-40 bg-white/10 rounded-full blur-3xl"
            animate={{ y: [0, -40, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-16 left-16 w-48 h-48 bg-[#EFF3EA]/30 rounded-full blur-3xl"
            animate={{ y: [0, 60, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
          />

          {/* HERO CONTENT (Left Aligned) */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute z-10 flex flex-col items-start justify-center px-6 md:px-16 w-full md:w-1/2 h-full left-0 text-white text-left"
          >
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-4xl md:text-8xl font-semibold leading-tight drop-shadow-xl font-poppins"
            >
              Ride Smarter with TITI
            </motion.h1>

            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-6 text-lg md:text-md font-light leading-relaxed max-w-xl text-gray-200"
            >
              Book reliable cabs and city tours with a single tap. Experience seamless travel that’s fast, safe, and stress-free.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="mt-10 px-6 py-3 flex items-center gap-2 bg-white/10 text-white font-medium text-sm rounded-xl shadow-lg backdrop-blur-md border border-white/20 hover:bg-white/20 hover:shadow-2xl transition-all"
            >
              <MapPin size={16} className="text-white" />
              Available in Iraq
            </motion.button>
          </motion.div>
        </section>

        {/* ---------------- SECTION 2 (WHAT'S THE PROCESS OF TITI) ---------------- */}
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="Section-2 relative w-screen min-h-[80vh] flex flex-col items-center justify-center 
             bg-gradient-to-br from-white via-orange-50 to-blue-50 px-6 md:px-16 text-center py-24 overflow-hidden"
        >
          {/* Decorative floating gradient glows */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl animate-pulse"></div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 font-sans mb-6 drop-shadow-sm"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            Why Choose <span className="text-red-500">TITI?</span>
          </motion.h2>

          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mb-16">
            TITI transforms your daily travel into an elevated experience — simple, safe, and delightfully smooth from start to finish.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl z-10">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="flex flex-col items-center text-center bg-white/30 backdrop-blur-lg border border-white/40
                 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-gradient-to-tr from-red-400 to-orange-400 p-4 rounded-full mb-4 shadow-md">
                <PhoneCall size={36} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Book Instantly</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Choose your destination and tap to book — TITI connects you to the nearest verified driver within seconds.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="flex flex-col items-center text-center bg-white/30 backdrop-blur-lg border border-white/40
                 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-gradient-to-tr from-orange-400 to-yellow-400 p-4 rounded-full mb-4 shadow-md">
                <Car size={36} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Ride Comfortably</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Experience professional drivers, premium comfort, and real-time tracking — wherever your journey takes you.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="flex flex-col items-center text-center bg-white/30 backdrop-blur-lg border border-white/40
                 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-gradient-to-tr from-blue-400 to-indigo-400 p-4 rounded-full mb-4 shadow-md">
                <CheckCircle2 size={36} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Arrive & Relax</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Get to your destination safely, on time, and stress-free — with full transparency at every step.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* ---------------- SECTION 3 ---------------- */}
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="Section-3 w-screen min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16 
          bg-gradient-to-br from-black via-black to-black relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,0,100,0.2),transparent_60%)] blur-2xl opacity-50 pointer-events-none"></div>

          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex-1 text-left z-10"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Experience the <span className="text-red-500">Future</span> of Rides
            </h2>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-lg">
              At <span className="font-semibold text-white">TITI</span>, we’re redefining how people move.  
              Powered by innovation, designed for comfort every ride is secure, smart, and effortless.
            </p>

            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="mt-10 px-6 py-3 flex items-center gap-2 bg-white/10 text-white font-medium text-sm rounded-xl shadow-lg backdrop-blur-md border border-white/20 hover:bg-white/20 hover:shadow-2xl transition-all"
              onClick={()=>router.push("/TITI-Services")}
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
            className="flex-1 flex justify-center items-center z-10"
          >
            <div className="relative w-72 h-72 md:w-[650px] md:h-[650px]">
              <Image
                src="/rider.png"
                alt="TITI car"
                fill
                className="object-contain drop-shadow-[0_0_40px_rgba(255,155,0,0.6)]"
              />
            </div>
          </motion.div>
        </motion.section>

        {/* ---------------- SECTION 4 (COMING SOON DOWNLOAD SECTION) ---------------- */}
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-screen min-h-[70vh] flex flex-col items-center justify-center text-white text-center px-6 md:px-16 py-24 relative overflow-hidden"
        >
          {/* Background Image with Next.js Image */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/bagh_bg.jpg"
              alt="Background"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Dark overlay for better contrast */}
          <div className="absolute inset-0 bg-black/30 -z-0"></div>

          {/* Content */}
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
            className="text-4xl md:text-5xl font-bold mb-4 z-10"
          >
            Ready to Get Started?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl z-10"
          >
            Download <span className="font-semibold text-white">TITI</span> soon and enjoy your first ride! 
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-6 z-10">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-white text-black px-8 py-3 rounded-full shadow-md 
                 hover:shadow-xl transition-all font-medium"
            >
              <Image src="/apple-logo.png" alt="App Store" width={24} height={24} />
              <span className="font-bold">Coming Soon</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-white text-black px-8 py-3 rounded-full shadow-md 
                 hover:shadow-xl transition-all font-medium"
            >
              <Image src="/google-logo.png" alt="Google Play" width={24} height={24} />
              <span className="font-bold">Coming Soon</span>
            </motion.button>
          </div>
        </motion.section>

        {/* ---------------- FOOTER ---------------- */}
        <Footer/>

      </div>
    </>
  )
}

export default Page
