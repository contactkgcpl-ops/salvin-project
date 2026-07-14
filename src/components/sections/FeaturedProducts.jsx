import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const products = [
    {
      name: "Rotary Drying System",
      category: "Processing Equipment",
      description: "High-efficiency thermal processing for granular materials with advanced moisture control.",
      image: "https://images.unsplash.com/photo-1580983546222-6b95764d0bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Automated Packaging Line",
      category: "Packaging Solutions",
      description: "Fully integrated high-speed packaging solution with robotic palletizing capabilities.",
      image: "https://images.unsplash.com/photo-1615810220468-b328a2a7cc3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Industrial Ribbon Blender",
      category: "Mixing Equipment",
      description: "Precision dry powder mixing with double helical ribbon agitator for homogeneous blends.",
      image: "https://images.unsplash.com/photo-1574627192661-8f5963f256ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Pneumatic Conveying System",
      category: "Material Handling",
      description: "Dust-free, automated transfer of bulk solids across long distances with minimal degradation.",
      image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "CIP Clean-in-Place Station",
      category: "Sanitation Systems",
      description: "Automated cleaning system ensuring maximum hygiene for food and pharmaceutical plants.",
      image: "https://images.unsplash.com/photo-1623863777598-a28efbf2d57d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Jacketed Reactor Vessel",
      category: "Processing Equipment",
      description: "Custom-engineered reactors for complex chemical and biological processes under controlled conditions.",
      image: "https://images.unsplash.com/photo-1587293852726-59cb2a79841f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h4 className="text-[#F47A20] font-semibold tracking-wider uppercase mb-3 text-sm">Machinery & Equipment</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F35] leading-tight">
              Precision Engineered <br/> Products
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/products" className="inline-flex items-center gap-2 text-[#0B1F35] font-semibold hover:text-[#F47A20] transition-colors">
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold uppercase tracking-wider text-[#0B1F35] rounded-full">
                    {product.category}
                  </span>
                </div>
                {/* Hover Overlay Button */}
                <div className="absolute inset-0 bg-[#0B1F35]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-[#F47A20] hover:text-white text-[#0B1F35]">
                    <ArrowUpRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#0B1F35] mb-3 group-hover:text-[#F47A20] transition-colors">{product.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>
                <div className="flex items-center text-sm font-semibold text-[#0B1F35] group-hover:text-[#F47A20] transition-colors">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;
