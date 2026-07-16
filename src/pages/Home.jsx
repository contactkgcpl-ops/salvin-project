import React from 'react';
import Hero from '../components/sections/Hero';
import CompanyOverview from '../components/sections/CompanyOverview';
import FeaturedServices from '../components/sections/FeaturedServices';
import EngineeringProcess from '../components/sections/EngineeringProcess';
import Leadership from '../components/sections/Leadership';
import IndustriesWeServe from '../components/sections/IndustriesWeServe';
import WhyChooseUs from "../components/sections/WhyChooseUs";
import FAQ from "../components/sections/FAQ";
import CTASection from '../components/sections/CTASection';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <div className="w-full overflow-hidden font-sans">
      <SEO 
        title="Salvin Projects | Turnkey Project Setup for Food, Pharma & Chemical Plants"
        description="Leading provider of turnkey project setup, food and spices plant, pharma plant setup, and beverage manufacturing plant setups."
        keywords="turnkey project setup, plant setup, food and spices plant, pharma plant setup, cosmetic manufacturing plant, chemical plant setup, beverage plant project"
      />
      <Hero />
      <FeaturedServices />
      <CompanyOverview />
      <EngineeringProcess />
      <IndustriesWeServe />
      <Leadership />
      <WhyChooseUs />
      <FAQ />
      <CTASection />
    </div>
  );
};

export default Home;
