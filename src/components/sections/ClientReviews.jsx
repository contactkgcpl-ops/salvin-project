import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const initialReviews = [
  {
    id: 1,
    text: "Salvin India was instrumental in executing our 500TPD API plant from concept to commissioning. Their EPC capabilities and timeline management ensured we went live 2 months ahead of schedule. Their...",
    name: "Rajiv Mehta",
    designation: "MD, Apex Pharma",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    text: "Our experience with Salvin on the automated food processing line has been exceptional. Their strategic inputs during process engineering and seamless SCADA integration completely transformed our...",
    name: "Sarah Jenkins",
    designation: "Ops Head, Global Foods",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    text: "For Desai Chemicals, we wanted a turnkey partner who understood high-containment automation. Salvin exceeded our expectations. Their end-to-end support, from initial layout to final handover, was...",
    name: "Amit Desai",
    designation: "CEO, Desai Chemicals",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 4,
    text: "We contracted Salvin for a complete plant modernization project. Their team upgraded our legacy systems with state-of-the-art PLC controls without disrupting our ongoing production. Highly recommended for...",
    name: "David Chen",
    designation: "Technical Director, BevCorp",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 5,
    text: "Setting up a cosmetics manufacturing unit requires extreme precision and FDA compliance. Salvin India handled the entire turnkey setup flawlessly. Their engineering expertise gave us huge confidence...",
    name: "Sneha Rao",
    designation: "Founder, PureCosmetics",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 6,
    text: "We rely on Salvin for our Annual Maintenance Contracts (AMC). Their rapid response and proactive operations & maintenance support have virtually eliminated our downtime. They are a true engineering...",
    name: "Vikram Singh",
    designation: "Plant Manager, SpiceTech",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 7,
    text: "Salvin's packaging automation solutions revolutionized our export operations. Their bespoke engineering approach allowed us to double our throughput while reducing manual labor significantly. Their...",
    name: "John Miller",
    designation: "VP Operations, EuroExport",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

const ClientReviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setReviews((prev) => {
      const newArr = [...prev];
      const first = newArr.shift();
      newArr.push(first);
      return newArr;
    });
  };

  const prevSlide = () => {
    setReviews((prev) => {
      const newArr = [...prev];
      const last = newArr.pop();
      newArr.unshift(last);
      return newArr;
    });
  };

  return (
    <section className="py-16 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#0B1F35] font-semibold text-sm">Client Reviews</span>
            <div className="w-16 h-0.5 bg-[#F47A20]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F47A20]">
            What Clients Says About us
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 w-10 h-10 bg-[#1a1a1a] text-white rounded-full flex items-center justify-center hover:bg-[#F47A20] transition-colors shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 w-10 h-10 bg-[#1a1a1a] text-white rounded-full flex items-center justify-center hover:bg-[#F47A20] transition-colors shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Wrapper */}
          <div className="overflow-hidden px-4 py-8 -mx-4">
            <div className="flex gap-6">
              <AnimatePresence mode="popLayout">
                {reviews.slice(0, itemsPerView).map((review) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.8, x: 100 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: -100 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    key={review.id} 
                    className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] bg-[#f9f8f6] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Quote className="w-10 h-10 text-[#F47A20] fill-[#F47A20] mb-6 rotate-180" />
                    
                    <p className="text-gray-600 text-[15px] leading-relaxed mb-1">
                      {review.text} <span className="text-[#F47A20] font-medium cursor-pointer hover:underline">View More</span>
                    </p>
                    
                    <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-200/60">
                      <img 
                        src={review.image} 
                        alt={review.name} 
                        className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                      />
                      <div>
                        <h4 className="font-bold text-[#0B1F35] text-base">{review.name}</h4>
                        <p className="text-sm text-gray-500">{review.designation}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
