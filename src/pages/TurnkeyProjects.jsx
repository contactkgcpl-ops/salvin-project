import HeroSection from './TurnkeyProject/components/HeroSection'
import AboutSection from './TurnkeyProject/components/AboutSection'
import ProjectsSection from './TurnkeyProject/components/ProjectsSection'
import ProcessSection from './TurnkeyProject/components/ProcessSection'

import SEO from '../components/SEO'

function TurnkeyProjects() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-white text-slate-900">
      <SEO 
        title="Turnkey Projects & Plant Setup | KMG Projects"
        description="Explore our turnkey project setups for food, pharmaceutical, and chemical industries. Complete end-to-end manufacturing plant solutions."
        keywords="turnkey projects, turnkey plant setup, industrial plant manufacturer, food processing plant, pharmaceutical plant"
        url="https://kmgprojects.in/turnkey-projects"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Turnkey Project Execution",
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
            "name": "Turnkey Plant Projects",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Food Processing Plant Setup"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Pharmaceutical Plant Setup"
                }
              }
            ]
          }
        }}
      />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ProcessSection />

      </main>
    </div>
  )
}

export default TurnkeyProjects
