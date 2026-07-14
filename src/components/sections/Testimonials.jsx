import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Operations Director",
      company: "Apex Food Industries",
      content: "Salvin India completely transformed our processing line. Their engineering team understood our unique constraints and delivered a bespoke turnkey solution that increased our output by 35% while reducing energy consumption.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Sarah Mitchell",
      role: "VP of Manufacturing",
      company: "GlobalChem Corp",
      content: "The level of precision in their reactor vessel fabrication is unmatched. What impressed us most was their commitment to the project timeline. Everything was delivered and commissioned exactly on schedule.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Amit Desai",
      role: "Managing Director",
      company: "Pioneer Pharma",
      content: "We partnered with Salvin for a new automated packaging line. Their post-installation support has been phenomenal. They don't just supply equipment; they build long-term partnerships based on trust and performance.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#0B1F35]">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#051121] z-0 hidden lg:block"></div>
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#F47A20]/10 rounded-full blur-[120px] z-0"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Text */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-[#F47A20] font-semibold tracking-wider uppercase mb-3 text-sm">Client Success</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Trusted by Industry Leaders
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Don't just take our word for it. Hear from the companies that have transformed their operations with our engineering solutions.
              </p>
              
              {/* Controls */}
              <div className="flex items-center gap-4">
                <button 
                  onClick={prev}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#F47A20] hover:border-[#F47A20] transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={next}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#F47A20] hover:border-[#F47A20] transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right: Slider */}
          <div className="lg:w-2/3 w-full relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="glass-dark p-10 md:p-14 rounded-3xl border border-white/10 relative"
              >
                <Quote className="absolute top-10 right-10 w-24 h-24 text-white/5" />
                
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light mb-10 relative z-10 italic">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="flex items-center gap-6 relative z-10 border-t border-white/10 pt-8">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#F47A20]"
                  />
                  <div>
                    <h4 className="text-white font-bold text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-[#F47A20] text-sm">{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-8 bg-[#F47A20]' : 'bg-white/20 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
