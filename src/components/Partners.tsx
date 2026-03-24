import { motion } from "motion/react";

export default function Partners() {
  return (
    <section className="py-20 bg-black border-y border-white/5 transition-colors duration-300 relative z-20">
      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }} 
        transition={{ duration: 1 }} 
        className="container mx-auto px-8"
      >
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-4 rounded-full border border-white/10 text-[10px] uppercase tracking-[0.2em] font-body text-white/60">
            Specialized Industries &amp; Niches
          </span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          <span className="font-heading italic text-2xl text-white">E-commerce</span>
          <span className="font-heading italic text-2xl text-white">SaaS</span>
          <span className="font-heading italic text-2xl text-white">Healthcare</span>
          <span className="font-heading italic text-2xl text-white">Real Estate</span>
          <span className="font-heading italic text-2xl text-white">Luxury Retail</span>
        </div>
      </motion.div>
    </section>
  );
}
