import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import { handleFormSubmit } from '../utils/formSubmit';

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Company: '',
    Email: '',
    Phone: '',
    Subject: '',
    Message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(e, formData, "Contact Page Form");
    setFormData({ Name: '', Company: '', Email: '', Phone: '', Subject: '', Message: '' });
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };
  return (
    <div className="w-full bg-[#F3F4F6] font-sans pt-32 pb-0">
      <SEO 
        title="Contact Us for Plant Setup | KMG Projects"
        description="Get in touch with KMG Projects for turnkey project setup, plant upgrades, and manufacturing plant installations in India and globally."
        keywords="contact for plant setup, turnkey project consultation, factory setup inquiry, KMG projects contact, engineering consultant"
        url="https://kmgprojects.in/contact"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "KMG Projects",
          "image": "https://kmgprojects.in/logo.webp",
          "url": "https://kmgprojects.in/contact",
          "telephone": "+91-9925186661",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "210, Arved Transcube Mall, Bandhu Nagar, Vijay Nagar, Ranip",
            "addressLocality": "Ahmedabad",
            "addressRegion": "Gujarat",
            "postalCode": "382480",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 23.0725514,
            "longitude": 72.5762463
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:30",
            "closes": "18:30"
          }
        }}
      />
      
      {/* Top Section: Form */}
      <div className="container mx-auto px-4 md:px-6 mb-20">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-12">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F35] mb-4">Send Us a Message</h2>
            <p className="text-gray-600">Fill out the form below and our technical team will get back to you shortly.</p>
          </div>

          {isSubmitted && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-8 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <p className="font-medium">Thank you! Your inquiry has been sent successfully. Our team will contact you soon.</p>
            </motion.div>
          )}

          <form className="space-y-6" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                <input 
                  type="text" 
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F47A20] focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                <input 
                  type="text" 
                  name="Company"
                  value={formData.Company}
                  onChange={handleChange}
                  placeholder="Your Company Ltd." 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F47A20] focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                <input 
                  type="email" 
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F47A20] focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="Phone"
                  value={formData.Phone}
                  onChange={handleChange}
                  placeholder="+91 9898727796" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F47A20] focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
              <input 
                type="text" 
                name="Subject"
                value={formData.Subject}
                onChange={handleChange}
                placeholder="Inquiry about Pneumatic Systems" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F47A20] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
              <textarea 
                rows="5"
                name="Message"
                value={formData.Message}
                onChange={handleChange}
                required
                placeholder="Please describe your requirements..." 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F47A20] focus:border-transparent transition-all resize-none"
              ></textarea>
            </div>

            <div className="flex justify-center pt-4">
              <button 
                type="submit" 
                className="bg-[#F47A20] hover:bg-[#E06915] text-white font-bold py-3 px-12 rounded-lg transition-colors shadow-md cursor-pointer"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Section: Map and Info */}
      <div className="bg-white w-full py-20">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Info */}
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F35] mb-6">Visit Our Corporate Office</h2>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                We welcome clients to visit our facility to discuss engineering projects, view our product catalogs, and consult with our technical experts in person.
              </p>
              
              <div className="flex items-start gap-4 p-6 bg-[#F8FAFC] rounded-2xl border border-gray-100 shadow-sm">
                <div className="bg-[#E2E8F0] p-3 rounded-full shrink-0 mt-1">
                  <MapPin className="w-6 h-6 text-[#0B1F35]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0B1F35] mb-2">Salvin Headquarters</h4>
                  <p className="text-gray-600 leading-relaxed">
                    210, Arved Transcube Mall,<br />
                    Bandhu Nagar, Vijay Nagar,<br />
                    Ranip, Ahmedabad, Gujarat 382480, India
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Map */}
            <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.6698650383187!2d72.57624631496884!3d23.072551484928065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e838af298e1bb%3A0xc638cd3fc9d9d20c!2sArved%20Transcube%20Plaza!5e0!3m2!1sen!2sin!4v1689163231876!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Salvin Projects Location"
              ></iframe>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
