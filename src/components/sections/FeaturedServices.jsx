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
      image: "/about-machinery.webp",
      features: ["Clean & Safe Setup", "High Production Speed", "International Standards"]
    },
    {
      title: "Pharma & Medicine Plants",
      description: "We set up complete manufacturing plants for medicines and pharmaceuticals, ensuring everything is highly hygienic and completely safe.",
      image: "/images/pharma-plant.png",
      features: ["Hygienic Setup", "Complete Automation", "Safe Production"]
    },
    {
      title: "Cosmetic & Chemical Factories",
      description: "From creams and lotions to industrial chemicals, we build the perfect factories and machines for your specific products.",
      image: "/images/complete-plant-setup.png",
      features: ["Custom Machines", "Fast Production", "High Quality"]
    },
    {
      title: "Beverage & Liquid Plants",
      description: "We design and install full production lines for juices, cold drinks, and other beverages, complete with fast automatic filling machines.",
      image: "/images/beverage-packaging.webp",
      features: ["Automatic Filling", "Bottle Packing", "Fast Setup"]
    }
  ];

  return (
    <section className="pt-20 pb-12 bg-white text-gray-900">
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
            className="text-3xl md:text-4xl font-bold text-[#0B1F35] leading-tight mb-2"
          >
            Complete Project Services for <br/> Manufacturing Plants
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={idx} 
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-[#0B1F35]/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#0B1F35] mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F47A20]"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-[#F47A20] text-sm font-bold uppercase tracking-wider hover:text-[#0B1F35] transition-colors"
                >
                  Discuss Project
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedServices;
