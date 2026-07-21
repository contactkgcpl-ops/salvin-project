import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-gray-300 font-sans">
      {/* Top Section */}
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
          
          {/* Left: Newsletter */}
          <div className="w-full lg:w-1/2 lg:border-r border-gray-800 pr-0 lg:pr-12">
            <h3 className="text-3xl md:text-4xl text-white font-light mb-2">
              Got an <span className="italic font-serif">Idea ?</span>
            </h3>
            <h3 className="text-3xl md:text-4xl text-white font-light mb-8">
              Want to <span className="italic font-serif">Collaborate ?</span>
            </h3>
            
            <div className="flex w-full max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white text-gray-900 px-4 py-3 outline-none text-sm"
              />
              <button className="bg-black text-white px-8 py-3 text-sm font-semibold hover:bg-[#F47A20] transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Right: Links */}
          <div className="w-full lg:w-1/2 flex flex-col sm:flex-row justify-end lg:pl-12 gap-10 sm:gap-16">
            {/* Industries */}
            <div>
              <h4 className="text-gray-500 text-base mb-6">Industries</h4>
              <ul className="space-y-5">
                {[
                  { name: 'Pharmaceuticals', path: '/industries/pharmaceutical' },
                  { name: 'Chemicals & APIs', path: '/industries/chemical-and-api' },
                  { name: 'Beverages', path: '/industries/beverage' },
                  { name: 'Cosmetics', path: '/industries/cosmetics' },
                  { name: 'Food & Spices', path: '/industries/food-and-spices' },
                  { name: 'Engineering Expertise', path: '/industries/engineering-expertise' }
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.path} className="text-[15px] text-gray-300 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-gray-500 text-base mb-6">Quick Links</h4>
              <ul className="space-y-5">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Services', path: '/services' },
                  { name: 'Turnkey Projects', path: '/turnkey-projects' },
                  { name: 'Contact Us', path: '/contact' }
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.path} className="text-[15px] text-gray-300 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-800"></div>

      {/* Bottom Section */}
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-12">
          
          {/* Left: Big Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#1f1f1f] leading-none tracking-tight">
              LET'S<br/>
              BUILD<br/>
              TOGETHER
            </h2>
          </div>

          {/* Right: Company Contact */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right">
            <div className="mb-1 flex items-center">
              <span className="text-5xl md:text-6xl font-bold text-white tracking-wider">
                SALVIN
              </span>
            </div>
            <p className="text-[13px] text-white tracking-[0.2em] uppercase mb-8">
              Engineering <span className="text-[#F47A20]">|</span> Excellence
            </p>

            {/* Contact Details */}
            <div className="flex flex-col items-center md:items-end gap-3 text-sm text-gray-400">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-white"/> +91 9898727796</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white"/> info.salvinindustries@gmail.com
              </div>
              <div className="flex items-center gap-2 mt-2 text-right">
                <MapPin className="w-5 h-5 text-white shrink-0"/> 
                210, Arved Transcube Mall, Bandhu Nagar, Vijay Nagar, Ranip, Ahmedabad, Gujarat 382480, India
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
