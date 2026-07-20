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
        title="Salvin Projects | Turnkey Plant Setup & Industrial Engineering Experts"
        description="Leading provider of turnkey plant setups, process engineering, and industrial automation in Ahmedabad, India. We specialize in food, pharma, chemical, and cosmetic plants."
        keywords="turnkey plant setup ahmedabad, plant setup in ahmedabad, turnkey project setup, food and spices plant ahmedabad, pharma plant setup gujarat, cosmetic manufacturing plant, chemical plant setup india"
        url="https://kmgprojects.in/"
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Salvin Projects",
          "url": "https://kmgprojects.in/",
          "logo": "https://kmgprojects.in/logo.webp",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9925186661",
            "contactType": "customer service",
            "areaServed": ["IN", "Global"],
            "availableLanguage": ["en", "hi", "gu"]
          },
          "sameAs": [
            "https://www.facebook.com/salvinprojects",
            "https://www.linkedin.com/company/salvinprojects"
          ]
        }}
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
