import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: "/slider-new-1.webp",
    eyebrow: "Turnkey Liquid Filling Solutions",
    title: "Complete Beverage \n& Bottling Plant Setup",
    desc: "End-to-end solutions from business planning and plant design to execution and commissioning.",
  },
  {
    image: "/slider-new-2.webp",
    eyebrow: "Advanced Hygienic Solutions",
    title: "Pharmaceutical \nPlant Setup Experts",
    desc: "Complete turnkey pharma projects designed with the highest hygiene standards and regulatory compliance.",
  },
  {
    image: "/slider-new-3.webp",
    eyebrow: "Engineering the Future of Food Processing",
    title: "Food, Spices, Agri & \nDairy Processing Setup",
    desc: "Turnkey plant setup for food processing, filling, and automated packaging.",
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(slides.length - 1);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevSlide(currentSlide);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleManualSlide = (idx) => {
    if (idx !== currentSlide) {
      setPrevSlide(currentSlide);
      setCurrentSlide(idx);
    }
  };

  return (
    <section className="relative h-auto min-h-[100svh] md:min-h-[600px] md:h-[85vh] w-full bg-white flex items-start md:items-center overflow-hidden">
      
      {/* Inject custom CSS for responsive clip path */}
      <style>{`
        .hero-clip { 
          clip-path: none; 
          transform: translateZ(0); 
          will-change: transform, opacity; 
          backface-visibility: hidden; 
        }
        @media (min-width: 768px) {
          .hero-clip { 
            clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%); 
          }
        }
      `}</style>

      {/* Left Content Area */}
      <div className="relative z-20 w-full lg:w-[50%] px-6 md:px-12 lg:pl-24 flex flex-col justify-center h-auto md:h-full pt-12 pb-[320px] md:pt-0 md:pb-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            {/* Eyebrow */}
            <p className="text-[#64C240] font-bold text-sm md:text-base mb-3">
              {slides[currentSlide].eyebrow}
            </p>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1F35] leading-[1.1] mb-6 whitespace-pre-line tracking-tight">
              {slides[currentSlide].title}
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed max-w-md">
              {slides[currentSlide].desc}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-[#0B1F35] text-white px-8 py-3 text-sm font-bold tracking-wide hover:bg-[#153457] transition-colors"
              >
                GET A QUOTE
              </Link>
              <Link
                to="/turnkey-projects"
                className="border-2 border-[#0B1F35] text-[#0B1F35] px-8 py-3 text-sm font-bold tracking-wide hover:bg-[#0B1F35] hover:text-white transition-colors"
              >
                OUR PROJECTS
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Image Area with Diagonal Split on Desktop */}
      {/* Background Accent Layer (Blue top half, Green bottom half) */}
      <div 
        className="absolute bottom-0 md:top-0 right-0 h-[300px] md:h-full w-full md:w-[70%] lg:w-[60%] z-0 bg-gradient-to-b from-[#0B1F35] from-[50%] to-[#64C240] to-[50%] hero-clip"
      ></div>

      {/* Image Layer */}
      <div 
        className="absolute bottom-0 md:top-0 right-0 h-[300px] md:h-full w-full md:w-[70%] lg:w-[60%] z-10 translate-x-0 md:translate-x-[16px] hero-clip border-t-[6px] border-[#64C240] md:border-t-0"
      >
        {slides.map((slide, index) => {
          const isCurrent = currentSlide === index;
          const isPrev = prevSlide === index;
          // Only animate the new slide fading in, keep prev slide visible underneath
          return (
            <div
              key={index}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
              style={{ 
                backgroundImage: `url("${slide.image}")`,
                opacity: isCurrent || isPrev ? 1 : 0,
                zIndex: isCurrent ? 10 : (isPrev ? 5 : 0)
              }}
            />
          );
        })}
      </div>

      {/* Optional Slider Dots for manual navigation */}
      <div className="absolute bottom-8 left-6 md:left-12 lg:left-24 z-30 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleManualSlide(idx)}
            className={`w-12 h-2 transition-colors ${currentSlide === idx ? 'bg-[#0B1F35]' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;
