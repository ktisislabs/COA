'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function TitiAppsShowcase() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col text-white bg-black">
      {/* Navbar */}
      <Navbar />

      {/* 🖤 Hero Section */}
      <section className="bg-black max-w-7xl mx-auto px-6 md:px-10 py-24 flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="flex-1 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="text-5xl md:text-6xl font-extrabold leading-tight"
          >
            Experience the <span className="text-red-500">Future</span> of Rides
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="text-gray-300 max-w-xl text-lg leading-relaxed"
          >
            At <span className="font-semibold text-white">TITI</span>, we’re redefining how people move. 
            Powered by innovation, designed for comfort — every ride is secure, smart, and effortless.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex-1 flex justify-center"
        >
          <Image
            src="/hero-phone.png"
            alt="TITI App Preview"
            width={350}
            height={450}
            className="rounded-[2rem] shadow-2xl object-contain border border-gray-800"
          />
        </motion.div>
      </section>

      {/* ⚪ Rider App Section */}
      <section className="bg-gradient-to-br from-[#fff8f5] to-white text-black max-w-7xl mx-auto px-6 md:px-10 py-24 space-y-20 rounded-3xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Rider App Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex-1 flex justify-center"
          >
            <Image
              src="/rider.png"
              width={350}
              height={650}
              alt="TITI Rider App"
              className="rounded-[2rem] shadow-xl border border-gray-200 object-contain"
            />
          </motion.div>

          {/* Rider App Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-4xl font-extrabold text-gray-900">
              TITI <span className="text-red-500">Rider</span> App
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Your ultimate ride companion. From instant bookings to live tracking, 
              TITI Rider makes commuting seamless. Secure payments, verified drivers, 
              and a world-class experience — all in one app.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Instant booking and real-time tracking</li>
              <li>Safe, verified, and professional drivers</li>
              <li>Multiple payment options</li>
              <li>Elegant dark UI with lightning-fast experience</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 🖤 Driver App Section */}
      <section className="bg-black text-white max-w-7xl mx-auto px-6 md:px-10 py-24 space-y-20">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-16">
          {/* Driver App Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex-1 flex justify-center"
          >
            <Image
              src="/driver.png"
              width={350}
              height={650}
              alt="TITI Driver App"
              className="rounded-[2rem] shadow-2xl border border-gray-800 object-contain"
            />
          </motion.div>

          {/* Driver App Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-4xl font-extrabold">
              TITI <span className="text-red-500">Driver</span> App
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Designed for drivers who power the TITI ecosystem. Track rides, 
              offer tours, and connect with riders effortlessly. 
              Built to make every trip rewarding and reliable.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Smart ride requests and navigation</li>
              <li>Instant earnings tracking and insights</li>
              <li>Create and manage tours</li>
              <li>Built with driver safety and support in mind</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ❤️ CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-black py-20 text-center rounded-t-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="text-4xl font-extrabold mb-4"
        >
          Join the TITI Movement
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-gray-200 max-w-2xl mx-auto mb-8 text-lg"
        >
          Whether you're a rider or driver, experience a new era of smart mobility. Reliable. Safe. Innovative.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => router.push('/Contact')}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all"
        >
          Get Started
        </motion.button>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
