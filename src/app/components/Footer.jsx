
'use client'

import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-screen bg-white text-gray-300 py-16 px-6 md:px-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo & Description */}
            <div>
              <Image
                src="/logo.png" 
                alt="TITI Logo"
                width={120}
                height={40}
                className="mb-4"
              />
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                TITI brings comfort, innovation, and safety together redefining the way people move across cities.
              </p>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-black font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/About" className=" text-gray-800 hover:text-gray-500 transition">About Us</a></li>
                 <li><a href="/TITI-Services" className=" text-gray-800 hover:text-gray-500 transition">Solutions</a></li>
                
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-black font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
               
                <li><a href="/Contact" className="text-gray-800 hover:text-gray-500 transition">Contact Us</a></li>
                
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-black font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/PnP" className="text-gray-800 hover:text-gray-500 transition">Privacy Policy</a></li>
                <li><a href="/Terms&Conditions" className="text-gray-800 hover:text-gray-500 transition">Terms and Conditions</a></li>
               
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-black/30 mt-12 pt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} TITI. All rights reserved.
          </div>
        </footer>
  )
}
