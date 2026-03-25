import { motion } from "motion/react";

const phrases = [
  "WordPress Development",
  "Web Design",
  "UI/UX Design",
  "SEO Optimization",
  "Elementor Expert",
  "Website Performance",
  "Modern Web Experiences"
];

export default function Partners() {
  return (
    <section className="py-20 bg-black border-y border-white/5 transition-colors duration-300 relative z-20 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }} 
        transition={{ duration: 1 }} 
      >
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-4 rounded-full border border-white/10 text-[10px] uppercase tracking-[0.2em] font-body text-white/60">
            Specialized Industries &amp; Niches
          </span>
        </div>
        
        {/* Marquee Container */}
        <div className="relative flex overflow-hidden w-full group">
          {/* Gradient Masks for smooth fade on edges */}
          <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-marquee w-max group-hover:[animation-play-state:paused] transition-all duration-500">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center flex-nowrap">
                {phrases.map((phrase, index) => (
                  <div key={index} className="flex items-center">
                    <span className="font-heading italic text-4xl md:text-6xl text-white/60 whitespace-nowrap px-8 md:px-12 hover:text-white transition-colors duration-300 cursor-default">
                      {phrase}
                    </span>
                    <span className="text-white/20 text-2xl">•</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
