import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to add background blur dynamically
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className={`Navbar fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 z-[9999] transition-all duration-500 ${
        scrolled ? 'backdrop-blur-md bg-black/30 text-black' : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <span className="Logo-div">
        <p className="text-white text-2xl md:text-3xl font-roboto font-bold tracking-wide">
          TITI
        </p>
      </span>

      {/* Nav Items */}
      <ul className="Nav-items flex items-center gap-8 text-white">
        {['ABOUT US', 'SERVICES', 'CONTACT US'].map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1, color: '#D1D5DB' }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="font-medium font-sans cursor-pointer hover:text-gray-300 text-lg"
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default Navbar;
