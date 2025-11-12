'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

function Page() {
  const [loadCount, setLoadCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadCount((prevCount) => (prevCount < 100 ? prevCount + 1 : prevCount));
    }, 20);

    if (loadCount === 100) {
      setTimeout(() => router.push('/Home'), 400);
    }

    return () => clearInterval(interval);
  }, [loadCount, router]);

  return (
    <div className="w-screen h-screen bg-[#080808] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_80%)]"></div>

      {/* Centered Logo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col items-center z-10"
      >
        <Image
          src="/logo.png" 
          alt="TITI Logo"
          width={260}
          height={260}
          className="object-contain mb-6 opacity-95"
          priority
        />

        {/* Subtext (optional tagline) */}
        <p className="text-gray-300 text-md tracking-[0.2em] uppercase font-medium">
         Welcome to TITI...
        </p>
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute bottom-[10vh] w-[70%] max-w-[500px] h-1.5 bg-[#2a2a2a] rounded-full overflow-hidden shadow-inner"
      >
        <motion.div
          className="h-full bg-white rounded-full"
          style={{ width: `${loadCount}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Optional % text */}
      <p className="absolute bottom-[7vh] text-gray-400 text-xs font-light">
        {loadCount}%
      </p>
    </div>
  );
}

export default Page;
