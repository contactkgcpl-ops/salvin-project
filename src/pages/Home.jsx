import React from 'react';
import Hero from '../components/sections/Hero';
import CompanyOverview from '../components/sections/CompanyOverview';
import FeaturedServices from '../components/sections/FeaturedServices';
import EngineeringProcess from '../components/sections/EngineeringProcess';
import Leadership from '../components/sections/Leadership';
import IndustriesWeServe from '../components/sections/IndustriesWeServe';
import WhyChooseUs from "../components/sections/WhyChooseUs";
import ClientReviews from "../components/sections/ClientReviews";
import CTASection from '../components/sections/CTASection';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <div className="w-full overflow-hidden font-sans">
      <SEO 
        title="Salvin Projects | Turnkey Engineering & Automation Solutions"
        description="Leading provider of turnkey plant setups, process engineering, and industrial automation for food, pharma, and chemical industries."
        keywords="turnkey plant, process engineering, industrial automation, Salvin Projects"
      />
      <Hero />
      <CompanyOverview />
      <FeaturedServices />
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
