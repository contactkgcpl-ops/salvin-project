import { Lightbulb, Wrench, ShieldCheck, MapPin, GraduationCap, Headphones } from 'lucide-react';

const steps = [
  {
    icon: <Lightbulb className="w-12 h-12 stroke-[1.5]" />,
    title: "Design",
    desc: "Conceptualizing the ideal processing & packaging flow."
  },
  {
    icon: <Wrench className="w-12 h-12 stroke-[1.5]" />,
    title: "Build",
    desc: "High-precision manufacturing of core units."
  },
  {
    icon: <ShieldCheck className="w-12 h-12 stroke-[1.5]" />,
    title: "Testing",
    desc: "Rigorous pre-deployment validation of integrated systems."
  },
  {
    icon: <MapPin className="w-12 h-12 stroke-[1.5]" />,
    title: "Installation",
    desc: "Seamless on-site setup and utility integration."
  },
  {
    icon: <GraduationCap className="w-12 h-12 stroke-[1.5]" />,
    title: "Training",
    desc: "Empowering your operational team with technical know-how."
  },
  {
    icon: <Headphones className="w-12 h-12 stroke-[1.5]" />,
    title: "Support",
    desc: "Continuous maintenance & lifetime technical guidance."
  }
];

export default function ProcessSection() {
  return (
    <section className="bg-[#FAFAFA] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-[2px] w-8 bg-[#f47c20]"></span>
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#f47c20]">
            Our Implementation Process
          </h4>
          <span className="h-[2px] w-8 bg-[#f47c20]"></span>
        </div>

        <h2 className="mx-auto max-w-4xl text-center text-balance text-2xl font-extrabold uppercase leading-tight tracking-tight text-[#0B1F35] sm:text-3xl lg:text-4xl">
          FROM CONCEPT TO COMMISSIONING – WE DELIVER END TO END
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-gray-600 sm:text-base">
          A structured 6-step implementation process that ensures every project is delivered with precision, performance, and peace of mind.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col items-center text-center group cursor-pointer border border-gray-100"
            >
              <div className="text-[#0B1F35] mb-5 group-hover:scale-110 group-hover:text-[#F47A20] transition-all duration-300">
                {step.icon}
              </div>
              <h3 className="text-[#0B1F35] font-semibold text-base mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
