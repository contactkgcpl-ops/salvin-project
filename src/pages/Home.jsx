import React from 'react';
import Hero from '../components/sections/Hero';
import CompanyOverview from '../components/sections/CompanyOverview';
import EngineeringProcess from '../components/sections/EngineeringProcess';
import Leadership from '../components/sections/Leadership';
import IndustriesWeServe from '../components/sections/IndustriesWeServe';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import ClientReviews from '../components/sections/ClientReviews';
import CTASection from '../components/sections/CTASection';

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <CompanyOverview />
      <EngineeringProcess />
      <Leadership />
      <IndustriesWeServe />
      <WhyChooseUs />
      <ClientReviews />
      <CTASection />
    </div>
  );
};

export default Home;
