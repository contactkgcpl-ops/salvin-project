import { motion } from 'framer-motion';
import indus from '../../../assets/about-salvin.jpg';

function AboutSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <h4 className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#f47c20]">
            <span className="h-[2px] w-8 bg-[#f47c20]"></span>
            About The Company
          </h4>
          <h2 className="max-w-xl text-4xl font-extrabold leading-tight text-[#0c2d57] sm:text-5xl">
            Engineering <span className="text-[#f47c20]">India&apos;s Industrial</span> Future Since 2008
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-slate-600">
            Salvin Industries is a leading turnkey automation and packaging machinery group headquartered in Ahmedabad, Gujarat, India. We specialize in designing, manufacturing, and deploying high-performance production lines for global manufacturers across pharmaceuticals, food processing, cosmetics, and industrial sectors.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Our team of 200+ engineers brings together expertise in mechanical design, robotics, PLC programming, and process automation, ensuring every plant we build operates at peak efficiency from day one.
          </p>
        </div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl bg-slate-100 shadow-lg"
        >
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            src={indus} 
            alt="Salvin Industrial Plant Setup" 
            className="h-full w-full object-cover" 
          />
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection


