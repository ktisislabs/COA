'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])

  return (
    <div className="about-page w-screen min-h-screen bg-white overflow-x-hidden relative font-poppins">
      <Navbar />

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative w-screen h-[90vh] flex flex-col justify-center items-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div style={{ y: y1 }} className="absolute inset-0">
          <Image
            src="/about-bg.jpg"
            alt="About Background"
            fill
            className="object-cover brightness-[0.65] scale-105"
            priority
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />

        {/* Floating gradient blobs */}
        <motion.div
          className="absolute top-20 left-32 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          animate={{ y: [0, -60, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-24 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"
          animate={{ y: [0, 80, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }}
        />

        {/* HERO TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="z-10 text-center text-white px-6"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-extrabold mb-4 tracking-tight"
            animate={{ textShadow: ['0px 0px 10px #ff0000', '0px 0px 30px #ff5555', '0px 0px 10px #ff0000'] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          >
            About <span className="text-red-500">TITI</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-200 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Redefining mobility across Iraq — one ride at a time.
          </motion.p>
        </motion.div>
      </section>

      {/* ---------------- OUR STORY ---------------- */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative flex flex-col md:flex-row items-center justify-between gap-16 px-6 md:px-20 py-28 bg-gradient-to-br from-white via-orange-50/70 to-blue-50/70"
      >
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,200,100,0.2),transparent_60%)] pointer-events-none"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        />

        {/* Text Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 z-10"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our <span className="text-red-500">Story</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            TITI was born from a simple vision — to make travel in Iraq effortless, reliable,
            and empowering. We noticed how inconsistent rides and unreliable cabs
            were creating frustration for commuters. So, we decided to change that.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Today, TITI connects thousands of riders and drivers, combining
            intuitive technology with human-centered design — ensuring every ride
            feels smooth, safe, and delightful.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, rotate: -3 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 1.2 }}
          className="flex-1 flex justify-center items-center"
        >
          <div className="relative w-80 h-80 md:w-[600px] md:h-[600px]">
            <Image
              src="/about-story.jpeg"
              alt="Our Story"
              fill
              className="object-contain drop-shadow-[0_0_60px_rgba(255,150,0,0.5)] hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* ---------------- MISSION SECTION ---------------- */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-16 px-6 md:px-20 py-28 bg-black text-white"
      >
        {/* Glowing Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ repeat: Infinity, duration: 10 }}
        />

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 z-10"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-red-500">Mission</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            To empower riders and drivers with smarter, safer, and more efficient mobility —
            designed around trust, transparency, and technology.
          </p>
          <p className="text-gray-400 text-md leading-relaxed">
            We’re building an ecosystem where technology meets empathy — connecting people,
            not just destinations.
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 1.2 }}
          className="flex-1 flex justify-center items-center z-10"
        >
          <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
            <Image
              src="/about-mission.jpeg"
              alt="Our Mission"
              fill
              className="object-contain drop-shadow-[0_0_60px_rgba(255,0,100,0.5)] hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* ---------------- VISION SECTION ---------------- */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
        viewport={{ once: true }}
        className="relative flex flex-col md:flex-row items-center justify-between gap-16 px-6 md:px-20 py-28 bg-gradient-to-br from-white via-orange-50 to-blue-50"
      >
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,150,255,0.15),transparent_70%)]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 10 }}
        />

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 z-10"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-red-500">Vision</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            To become Iraq’s most trusted and loved ride platform — uniting innovation and
            human connection for a smarter tomorrow.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We envision cities that move seamlessly, communities that thrive, and a future
            where technology enhances every journey.
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotate: -4 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 1.2 }}
          className="flex-1 flex justify-center items-center z-10"
        >
          <div className="relative w-80 h-80 md:w-[600px] md:h-[600px]">
            <Image
              src="/about-vision.jpg"
              alt="Our Vision"
              fill
              className="object-contain drop-shadow-[0_0_50px_rgba(0,100,255,0.6)] hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* ---------------- TEAM SECTION ---------------- */}
      <motion.section
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
        viewport={{ once: true }}
        className="relative text-center py-28 bg-black text-white px-6 md:px-20 overflow-hidden"
      >
        {/* Animated Background Lights */}
        <motion.div
          className="absolute top-0 left-1/2 w-[140%] h-[140%] -translate-x-1/2 bg-[radial-gradient(circle,rgba(255,0,0,0.08),transparent_60%)]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 8 }}
        />

        <h2 className="text-5xl md:text-6xl font-bold mb-16 z-10 relative">
          Meet the <span className="text-red-500">Team</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto z-10 relative">
          {[
            { name: 'team 1', role: 'Founder & CEO', img: '/team1.png' },
            { name: 'team 2', role: 'Head of Operations', img: '/team2.png' },
            { name: 'team 3', role: 'Tech Lead', img: '/team3.png' },
          ].map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-xl hover:shadow-[0_0_50px_rgba(255,0,0,0.2)] transition-all"
            >
              <div className="relative w-44 h-44 mx-auto mb-6 rounded-full overflow-hidden border border-white/20">
                <Image src={member.img} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-400 text-sm tracking-wide">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ---------------- FOOTER ---------------- */}
      <Footer/>
    </div>
  )
}
