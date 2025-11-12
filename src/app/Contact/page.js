'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Submitted:', formData)
    alert('Thank you for reaching out! We’ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden bg-gradient-to-b from-black via-zinc-900 to-neutral-950 text-gray-100">
      <Navbar />

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative w-full h-[70vh] flex flex-col justify-center items-center overflow-hidden">
        {/* Floating gradients */}
        <motion.div
          className="absolute top-24 left-24 w-56 h-56 bg-red-500/20 rounded-full blur-3xl"
          animate={{ y: [0, -40, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-24 right-24 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"
          animate={{ y: [0, 60, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
        />

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Contact <span className="text-red-500">Us</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 font-light">
            Have a question or collaboration idea? We’d love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* ---------------- CONTACT SECTION ---------------- */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full py-24 px-6 md:px-20 flex flex-col lg:flex-row gap-16 justify-between items-center bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800"
      >
        {/* Contact Info */}
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-red-500">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
            Whether you’re a partner, user, or collaborator — we’re always open
            to conversations that move innovation forward.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="p-3 bg-red-50 rounded-xl text-red-500">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-gray-600">Baghdad, Iraq</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-3 bg-red-50 rounded-xl text-red-500">
                <Mail size={20} />
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <a
                  href="mailto:support@titi.com"
                  className="text-gray-600 hover:text-red-500 transition"
                >
                  support@titi.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-3 bg-red-50 rounded-xl text-red-500">
                <Phone size={20} />
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <a
                  href="tel:+9647701234567"
                  className="text-gray-600 hover:text-red-500 transition"
                >
                  +964 770 123 4567
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="flex-1 bg-white/90 backdrop-blur-xl border border-gray-200 shadow-lg rounded-3xl p-8 md:p-10 w-full max-w-lg"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Send Us a Message
          </h3>

          <div className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 rounded-xl border border-gray-300 bg-white text-gray-800 focus:outline-none focus:border-red-500 placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 rounded-xl border border-gray-300 bg-white text-gray-800 focus:outline-none focus:border-red-500 placeholder-gray-400"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="p-3 rounded-xl border border-gray-300 bg-white text-gray-800 focus:outline-none focus:border-red-500 placeholder-gray-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="p-3 rounded-xl border border-gray-300 bg-white text-gray-800 focus:outline-none focus:border-red-500 placeholder-gray-400 resize-none"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold tracking-wide shadow-md hover:shadow-red-400/30 transition-all duration-300"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </motion.section>

      {/* ---------------- MAP SECTION ---------------- */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-full h-[600px] relative"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d867845.4357424538!2d43.8869!3d33.3152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1557831b1d21a4db%3A0x2dd7d71dba6b48c4!2sBaghdad%2C%20Iraq!5e0!3m2!1sen!2sin!4v1719331331334!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-none grayscale-[30%] brightness-75"
        ></iframe>
      </motion.section>

      {/* ---------------- FOOTER ---------------- */}
      <Footer />
    </div>
  )
}
