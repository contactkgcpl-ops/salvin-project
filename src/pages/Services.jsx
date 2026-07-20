import React from 'react';
import { motion } from 'framer-motion';
import { 
  Factory, 
  Settings2, 
  Cpu, 
  RefreshCw, 
  Wrench, 
  DraftingCompass, 
  Package, 
  ShieldCheck, 
  Network, 
  Globe 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const servicesData = [
  { title: "Turnkey Plant Setup", icon: <Factory className="w-12 h-12 stroke-[1.5]" /> },
  { title: "Process Engineering", icon: <Settings2 className="w-12 h-12 stroke-[1.5]" /> },
  { title: "Industrial Automation", icon: <Cpu className="w-12 h-12 stroke-[1.5]" /> },
  { title: "Plant Modernization", icon: <RefreshCw className="w-12 h-12 stroke-[1.5]" /> },
  { title: "Operations & Maintenance", icon: <Wrench className="w-12 h-12 stroke-[1.5]" /> },
  { title: "3D Plant Design", icon: <DraftingCompass className="w-12 h-12 stroke-[1.5]" /> },
  { title: "Machinery Sourcing", icon: <Package className="w-12 h-12 stroke-[1.5]" /> },
  { title: "Regulatory Compliance", icon: <ShieldCheck className="w-12 h-12 stroke-[1.5]" /> },
  { title: "SCADA & IoT Systems", icon: <Network className="w-12 h-12 stroke-[1.5]" /> },
  { title: "Global Export Solutions", icon: <Globe className="w-12 h-12 stroke-[1.5]" /> }
];

const Services = () => {
  return (
    <div className="w-full font-sans bg-[#FAFAFA] min-h-screen pt-32 pb-20">
      <SEO 
        title="Industrial Plant Setup & Engineering Services | KMG Projects"
        description="Comprehensive services for turnkey project setups, process engineering, plant automation, and manufacturing plant design globally."
        keywords="turnkey project services, plant setup services, manufacturing plant design, industrial automation services, process engineering consultant"
        url="https://kmgprojects.in/services"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Turnkey Plant Setup and Engineering",
          "provider": {
            "@type": "LocalBusiness",
            "name": "KMG Projects"
          },
          "areaServed": {
            "@type": "Country",
            "name": "India"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Engineering Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Turnkey Plant Setup"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Process Engineering"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Industrial Automation"
                }
              }
            ]
          }
        }}
      />
      
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B1F35] mb-6">Services</h1>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Salvin Projects offers a comprehensive range of engineering and automation services designed to support your industrial plant at every stage, from concept to commissioning. Our end-to-end consulting covers turnkey setups, process optimization, and project planning, ensuring seamless integration of the latest technology and compliance standards. With a strong focus on maximizing efficiency and quality, we enhance your manufacturing operations, allowing you to innovate confidently.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-20">
          {servicesData.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8 flex flex-col items-center justify-center text-center group cursor-pointer border border-gray-50"
            >
              <div className="text-[#0B1F35] mb-5 group-hover:scale-110 group-hover:text-[#F47A20] transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-[#0B1F35] font-semibold text-sm md:text-base leading-snug">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed">
            Don't let challenges hold you back. Let us handle the complex engineering and automation while you focus on what matters most—growth and success.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-[#F47A20] hover:bg-[#e06915] text-white font-semibold py-3 px-10 rounded shadow-md hover:shadow-lg transition-all duration-300"
          >
            Consult Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
