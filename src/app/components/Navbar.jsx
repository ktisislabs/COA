'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  // Detect scroll to add background blur dynamically
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation handler
  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }} // made it a bit faster
      className={`Navbar fixed top-0 left-0 w-full flex items-center justify-between px-8 py-0 z-[9999] transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-md bg-black/20 shadow-md text-black'
          : 'bg-black/30 text-black'
      }`}
    >
      {/* Logo */}
      <span
        className="Logo-div flex items-center gap-2 cursor-pointer"
        onClick={() => handleNavigation('/')}
      >
        <Image
          src="/logo.png"
          alt="TITI Logo"
          width={110}
          height={110}
          className="object-contain"
        />
      </span>

      {/* Nav Items */}
      <ul className="Nav-items flex items-center gap-8 text-white">
        {[
          { name: 'Home', path: '/Home' },
          { name: 'About', path: '/About' },
          { name: 'Solutions', path: '/TITI-Services' },
          { name: 'Contact Us', path: '/Contact' },
        ].map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1, color: '#f87171' }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="font-medium font-sans cursor-pointer hover:text-red-400 text-lg"
            onClick={() => handleNavigation(item.path)}
          >
            {item.name}
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default Navbar;
