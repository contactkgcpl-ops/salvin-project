import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLeadContext } from '../../context/LeadContext';

const EquipmentGrid = ({ subtitle, title, equipmentList }) => {
  const { openModal } = useLeadContext();

  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-gray-500 text-sm font-bold tracking-widest uppercase mb-2 block">
              {subtitle}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0B1F35] leading-tight">
              {title}
            </h2>
          </div>
          
          <button 
            onClick={() => openModal()}
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-[#F47A20] transition-colors shadow-lg hover:shadow-xl group"
          >
            Book a call
            <span className="bg-[#F47A20] group-hover:bg-white group-hover:text-[#F47A20] text-white p-1 rounded-full transition-colors">
                <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentList.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[1.5rem] border border-gray-200 p-5 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              {/* Image Container */}
              <div className="rounded-xl overflow-hidden mb-6 h-56 bg-gray-100 flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Content */}
              <div className="px-2 pb-2 flex-grow flex flex-col">
                <div className="text-4xl font-light text-gray-300 mb-2 leading-none font-sans">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <h3 className="text-lg font-bold text-[#0B1F35] mb-4 pr-4">
                  {item.name}
                </h3>
                
                {/* Vertical Separator */}
                <div className="w-px h-6 bg-gray-300 mb-4"></div>
                
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EquipmentGrid;
