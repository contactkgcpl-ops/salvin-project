import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup 1.5 seconds after website loads
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Dark Overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-5xl bg-white shadow-2xl flex flex-col md:flex-row overflow-hidden rounded-md z-10 min-h-[500px]"
        >
          {/* Close Button */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 z-20 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-[#F47A20] transition-colors shadow-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Side: Graphic / Logo */}
          <div className="w-full md:w-[45%] bg-white relative p-8 flex items-center justify-center min-h-[500px] border-r border-gray-100">
            {/* Top Left Orange Triangle */}
            <div className="absolute top-0 left-0 w-0 h-0 border-t-[80px] border-t-[#F47A20] border-r-[80px] border-r-transparent"></div>
            {/* Top Right Orange Triangle */}
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[80px] border-t-[#F47A20] border-l-[80px] border-l-transparent"></div>
            {/* Bottom Left Orange Block */}
            <div className="absolute bottom-0 left-0 w-[120px] h-[40px] bg-[#F47A20] -skew-x-12 -ml-4"></div>
            {/* Bottom Right Orange Block */}
            <div className="absolute bottom-0 right-10 w-[120px] h-[40px] bg-[#F47A20] -skew-x-12"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <span className="text-6xl font-bold text-[#0B1F35] tracking-wider mb-2">
                SALVIN<span className="text-[#F47A20]">.</span>
              </span>
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-widest text-center">
                Engineering <br/> Excellence
              </span>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full md:w-[55%] bg-white flex flex-col justify-between p-6 md:p-8">
            
            {/* Top Banner */}
            <div className="w-full bg-[#0B1F35] text-white text-center py-3 px-4 rounded-sm mb-6 shadow-sm">
              <p className="text-sm md:text-[15px] font-medium">
                Your Trusted Turnkey EPC Partner Delivering Engineering Excellence
              </p>
            </div>

            {/* Form Fields */}
            <form className="flex-grow flex flex-col justify-center gap-6 mb-6" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Full name" 
                className="w-full pb-3 text-[15px] text-gray-700 placeholder-gray-500 border-b border-[#F47A20] outline-none focus:border-[#0B1F35] transition-colors bg-transparent"
              />
              <input 
                type="email" 
                placeholder="name@company.com" 
                className="w-full pb-3 text-[15px] text-gray-700 placeholder-gray-500 border-b border-[#F47A20] outline-none focus:border-[#0B1F35] transition-colors bg-transparent"
              />
              <input 
                type="tel" 
                placeholder="Phone No." 
                className="w-full pb-3 text-[15px] text-gray-700 placeholder-gray-500 border-b border-[#F47A20] outline-none focus:border-[#0B1F35] transition-colors bg-transparent"
              />
              <input 
                type="text" 
                placeholder="What is your inquiry about?" 
                className="w-full pb-3 text-[15px] text-gray-700 placeholder-gray-500 border-b border-[#F47A20] outline-none focus:border-[#0B1F35] transition-colors bg-transparent"
              />

              <button 
                type="submit" 
                className="w-full mt-6 bg-[#ff4d4d] hover:bg-[#ff3333] text-white font-bold py-3.5 rounded-sm transition-colors shadow-md text-base"
              >
                Submit
              </button>
            </form>

            {/* Bottom Banner */}
            <div className="w-full bg-[#0B1F35] text-white text-center py-3 px-4 rounded-sm shadow-sm mt-auto">
              <p className="text-sm font-medium">
                Powering your industrial projects forward
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PopupModal;
