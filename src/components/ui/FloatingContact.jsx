import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Phone, Mail } from 'lucide-react';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  // WhatsApp Icon SVG
  const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2, staggerChildren: 0.1 }}
            className="flex flex-col gap-4 items-center"
          >
            {/* Phone Button */}
            <motion.a 
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              transition={{ delay: 0.2 }}
              href="tel:+919876543210"
              className="w-12 h-12 rounded-full bg-[#1CD076] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              title="Call Us"
            >
              <Phone className="w-5 h-5 fill-white" />
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a 
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              transition={{ delay: 0.1 }}
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              title="WhatsApp Us"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </motion.a>

            {/* Email Button */}
            <motion.a 
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              transition={{ delay: 0 }}
              href="mailto:info@salvinindia.com"
              className="w-12 h-12 rounded-full bg-[#FF4B5C] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              title="Email Us"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-[#FF4B5C] text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-transform cursor-pointer"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-8 h-8" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare className="w-8 h-8 fill-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};

export default FloatingContact;
