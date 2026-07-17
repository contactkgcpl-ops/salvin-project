import HeroIMG from "../../../assets/turnkey-plant-bg-2.png";

function HeroSection() {
  return (
    <section className="relative h-[70vh] sm:h-[80vh] lg:h-[85vh] w-full bg-[#f6f6f6] flex items-center overflow-hidden">
      {/* Background Image - High quality transparent PNG */}
      <img
        src={HeroIMG}
        alt="Turnkey Plant Solutions"
        className="absolute inset-0 w-full h-full object-contain object-center z-0"
      />

      {/* Content Box with small white space on the left */}
      <div className="relative z-10 w-full pl-4 md:pl-6 lg:pl-10">
        <div className="bg-[#eb7c22] inline-block py-2 px-6 md:py-3 md:px-10 lg:py-4 lg:px-12 shadow-xl">
          <h1 className="text-white text-lg md:text-xl lg:text-3xl font-bold font-serif tracking-wider leading-none">
            Complete Turnkey Plant Solutions
          </h1>
        </div>
      </div>

      {/* White Curve Overlay at the bottom */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] transform translate-y-1 z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[60px] md:h-[100px] lg:h-[130px]">
          <path d="M0,120 L0,0 Q600,120 1200,0 L1200,120 Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  )
}

export default HeroSection;
