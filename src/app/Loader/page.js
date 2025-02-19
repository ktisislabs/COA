'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


function Page() {
  const [loadCount, setLoadCount] = useState(0);
  const router=useRouter() ; 

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadCount((prevCount) => (prevCount < 100 ? prevCount + 1 : prevCount));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Loader-Page w-screen h-screen bg-[#EFF3EA] flex items-center justify-center">
      <div className="flex flex-col items-center w-full px-4">
      
        <p className="text-black text-xl flex items-center sm:text-2xl md:text-xl font-sans font-bold text-center">
          CHAMBERS OF ANIRUDDHA
        </p>
       

        <div className="w-[20vw] max-w-[50vw] sm:max-w-[100%] h-1 bg-gray-300 my-5 rounded-full overflow-hidden">
          <div
            className="h-1 bg-[#9e9d9d] transition-all duration-300"
            style={{ width: `${loadCount}%` }}
          ></div>
        </div>
      </div>


    {loadCount===100?(router.push('/Home')):null}

    </div>
  );
}

export default Page;
