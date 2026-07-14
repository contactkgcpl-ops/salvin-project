import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: "/slider-1.png",
    subtitle: "High-Speed Automation",
    title: "Next-Gen Bottling \n& Beverage Solutions",
    desc: "Customized liquid filling technologies for the dynamic beverage industry.",
    linkText: "EXPLORE BEVERAGE",
    alignment: "center"
  },
  {
    image: "/slider-2.png",
    subtitle: "Precision & Hygiene",
    title: "Pharmaceutical \nEngineering Excellence",
    desc: "State-of-the-art turnkey solutions ensuring the highest standards of hygiene.",
    linkText: "EXPLORE PHARMA",
    alignment: "center"
  },
  {
    image: "/slider-3.png",
    subtitle: "Simplifying Solutions, Maximising Success",
    title: "Your Trusted Food-Tech Partner",
    desc: "Automated filling and packing lines designed to preserve flavor and quality.",
    linkText: "EXPLORE OUR EXPERTISE",
    alignment: "center"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[70vh] min-h-[450px] w-full flex items-center justify-center overflow-hidden bg-[#0B1F35]">
      
      {/* Background Images */}
      <AnimatePresence initial={false}>
        <motion.div 
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${slides[currentSlide].image}")` }}
        />
      </AnimatePresence>
      
      {/* Overlay - Restored teal color */}
      <div className="absolute inset-0 bg-[#0FA3B1]/60 mix-blend-multiply z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F35]/80 via-[#0B1F35]/20 to-transparent z-10"></div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-[#0B1F35]/80 text-white flex items-center justify-center hover:bg-[#0B1F35] transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-[#0B1F35]/80 text-white flex items-center justify-center hover:bg-[#0B1F35] transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-12 md:px-24 h-full flex flex-col justify-center pt-20">
        <div className={`w-full max-w-5xl ${slides[currentSlide].alignment === 'center' ? 'mx-auto text-center flex flex-col items-center' : 'text-left flex flex-col items-start'}`}>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${slides[currentSlide].alignment === 'center' ? 'items-center' : 'items-start'}`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-4 drop-shadow-lg whitespace-pre-line">
                {slides[currentSlide].title}
              </h1>

              {slides[currentSlide].subtitle && (
                <p className="text-xl md:text-2xl font-light tracking-wide text-white/95 mb-8 max-w-3xl drop-shadow-md">
                  {slides[currentSlide].subtitle}
                </p>
              )}

              {/* Separator Line */}
              <div className="w-16 h-[2px] bg-white mb-6"></div>

              {/* Minimal Text Link */}
              <Link 
                to="/services" 
                className="inline-flex items-center text-white text-sm md:text-base font-bold tracking-widest uppercase hover:text-[#F47A20] transition-colors group"
              >
                {slides[currentSlide].linkText}
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

    </section>
  );
};

export default Hero;
