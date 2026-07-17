import HeroSection from './TurnkeyProject/components/HeroSection'
import AboutSection from './TurnkeyProject/components/AboutSection'
import ProjectsSection from './TurnkeyProject/components/ProjectsSection'
import ProcessSection from './TurnkeyProject/components/ProcessSection'
import CTASection from './TurnkeyProject/components/CTASection'

function TurnkeyProjects() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-white text-slate-900">
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ProcessSection />
        <CTASection />
      </main>
    </div>
  )
}

export default TurnkeyProjects
