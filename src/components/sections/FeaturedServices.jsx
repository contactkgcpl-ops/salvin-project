import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedServices = () => {
  const services = [
    {
      title: "Turnkey Plant Setup",
      description: "End-to-end execution of large-scale industrial projects. We manage everything from initial plant layout and civil guidance to equipment manufacturing, installation, and final commissioning.",
      image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: ["Concept to Commissioning", "Cost & Timeline Management", "Single-Point Responsibility"]
    },
    {
      title: "Process Engineering & Consulting",
      description: "Expert engineering consultation to design highly efficient process workflows, optimize facility layouts, and ensure compliance with global GMP and FDA standards.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: ["Feasibility Studies", "Process Optimization", "Regulatory Compliance"]
    },
    {
      title: "Industrial Automation Projects",
      description: "Designing and deploying state-of-the-art PLC, SCADA, and IoT systems for entire plants to minimize human error, reduce downtime, and achieve unprecedented production control.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: ["Plant-Wide SCADA Systems", "Robotics Integration", "Centralized Monitoring"]
    },
    {
      title: "Plant Upgrades & Modernization",
      description: "Transforming legacy manufacturing facilities into highly efficient, automated modern plants. We upgrade equipment, control systems, and processes with minimal downtime.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: ["Capacity Expansion", "Technology Retrofitting", "Energy Optimization"]
    },
    {
      title: "Operations & Maintenance (O&M)",
      description: "Comprehensive Annual Maintenance Contracts (AMC) and lifecycle support to ensure your industrial plant runs smoothly with maximum uptime and extended asset lifespan.",
      image: "https://images.unsplash.com/photo-1621415668351-4b130e61d8a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: ["Preventive Maintenance", "24/7 Technical Support", "Performance Tuning"]
    }
  ];

  return (
    <section className="py-12 bg-white text-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#F47A20] font-semibold tracking-wider uppercase mb-2 text-xs"
          >
            Our Expertise
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-[#0B1F35] leading-tight mb-4"
          >
            Engineering Solutions for <br/> Complex Challenges
          </motion.h2>
        </div>

        <div className="space-y-20">
          {services.map((service, idx) => {
            const isEven = idx % 2 === 1;
            
            return (
              <div key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-12`}>
                
                {/* Image */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-2/5 relative"
                >
                  <div className="relative rounded-2xl overflow-hidden aspect-video group">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#0B1F35]/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  {/* Decorative Block */}
                  <div className={`absolute -bottom-6 ${isEven ? '-left-6' : '-right-6'} w-32 h-32 bg-[#F47A20] rounded-2xl -z-10 opacity-20 blur-2xl`}></div>
                </motion.div>

                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full lg:w-3/5 lg:px-6"
                >
                  <div className="text-[#F47A20] font-bold text-5xl opacity-20 mb-3 font-serif">
                    0{idx + 1}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0B1F35] mb-4">{service.title}</h3>
                  <p className="text-gray-600 text-base mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F47A20]"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link to="#" className="inline-flex items-center justify-center px-6 py-2.5 bg-transparent border border-gray-200 hover:border-[#F47A20] text-[#0B1F35] text-sm font-semibold rounded-lg transition-all duration-300 hover:bg-[#F47A20] hover:text-white group">
                    Explore Service
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

              </div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link to="/services" className="inline-flex items-center justify-center px-6 py-3 bg-[#0B1F35] text-white text-sm font-bold rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-xl shadow-gray-200 group">
            View All Services
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-[#F47A20]" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedServices;
