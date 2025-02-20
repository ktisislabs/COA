import React from 'react';

function Disclaimer({handleClosePopUp}) {
  return (
    <div className='Popup-screen w-screen h-screen flex items-center justify-center fixed top-0 left-0 z-20'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-55 z-10'></div>

      {/* Message Box */}
      <div className='disc-msg w-1/2 h-1/2 bg-white p-6 rounded-lg shadow-lg z-20 flex flex-col items-center justify-center'>
        <p className='text-lg text-black text-2xl font-semibold font-sans'>DISCLAIMER</p>
        <p className='my-5 text-2xl text-black'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className='border border-black px-5 py-2 rounded-xl text-white bg-black hover:text-black hover:bg-white font-bold' onClick={handleClosePopUp}> ACCEPT</button>

      </div>
    </div>
  );
}

export default Disclaimer;
