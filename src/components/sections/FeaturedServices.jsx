import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedServices = () => {
  const services = [
    {
      title: "Complete Plant Setup",
      description: "We handle the entire process of building your new factory from the ground up. From the initial layout design to manufacturing the machines and final testing, we do it all.",
      image: "/images/service-plant-setup.jpg",
      features: ["Start to Finish Setup", "Custom Machine Design", "Full Responsibility"]
    },
    {
      title: "Food Processing Solutions",
      description: "We build specialized factories for the food and spice industry. Our machinery ensures your products are processed safely, cleanly, and without losing their natural taste.",
      image: "/images/service-food-processing.jpg",
      features: ["Clean & Safe Setup", "High Production Speed", "International Standards"]
    },
    {
      title: "Engineering Consultancy",
      description: "We provide expert consultancy and guidance to design highly efficient factory layouts, automate processes, and select the right machinery for your specific needs.",
      image: "/images/service-consultancy.jpg",
      features: ["Process Optimization", "Factory Layout Design", "Technology Consulting"]
    },
    {
      title: "Machinery Upgrades",
      description: "If your factory is using old equipment, we can upgrade it with modern technology to increase your production capacity without needing to build a whole new plant.",
      image: "/images/service-upgrades.jpg",
      features: ["Increase Production", "Add Modern Tech", "Save Energy"]
    },
    {
      title: "Maintenance & Support",
      description: "We provide regular servicing and emergency support for your factory equipment. This ensures your machines never break down and your business keeps running smoothly.",
      image: "/images/service-maintenance.jpg",
      features: ["Regular Checkups", "24/7 Support Team", "Prevent Breakdowns"]
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

                  <Link to="/contact" className="inline-flex items-center justify-center px-6 py-2.5 bg-transparent border border-gray-200 hover:border-[#F47A20] text-[#0B1F35] text-sm font-semibold rounded-lg transition-all duration-300 hover:bg-[#F47A20] hover:text-white group">
                    Discuss Project
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturedServices;
