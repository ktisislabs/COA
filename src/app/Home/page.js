'use client'

import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, PhoneCall, Car, CheckCircle2 } from "lucide-react";

function Page() {
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
          className="Section-2 w-screen min-h-[70vh] flex flex-col items-center justify-center bg-white px-6 md:px-16 text-center py-16"
        >
          <motion.h2
            className="text-4xl font-bold text-black font-sans mb-4"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            Why choose  <span className="text-red-600">TITI?</span>
          </motion.h2>

          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mb-12">
            TITI simplifies your travel journey into three quick steps — effortless, secure, and seamless from start to finish.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="bg-red-400 p-4 rounded-full mb-4">
                <PhoneCall size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">1. Book Instantly</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Choose your destination and tap to book. TITI finds the nearest verified driver in seconds.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center text-center bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="bg-red-400 p-4 rounded-full mb-4">
                <Car size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">2. Ride Comfortably</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Enjoy smooth rides with professional drivers, real-time tracking, and comfort-first vehicles.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center text-center bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="bg-red-400 p-4 rounded-full mb-4">
                <CheckCircle2 size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">3. Arrive & Relax</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reach your destination safely and on time — every single time, with complete transparency.
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
          className="SEction-3 w-screen min-h-[70vh] bg-[#EFF3EA] flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16"
        >
          {/* Text on Left */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex-1 text-left"
          >
            <h2 className="text-5xl font-bold mb-6 text-gray-800">Experience the Future</h2>
            <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed max-w-lg">
              At TITI, we’re redefining how people move. Our technology-driven rides ensure comfort, safety, and a touch of luxury — all at your fingertips.
            </p>
          </motion.div>

          {/* Car Image Right */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
            className="flex-1 flex justify-center items-center"
          >
            <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
              <Image
                src="/car.png"
                alt="TITI car"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </motion.section>
      </div>
    </>
  )
}

export default Page
