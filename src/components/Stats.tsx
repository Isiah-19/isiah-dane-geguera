import { motion } from "motion/react";
import HlsVideo from './HlsVideo';

export default function Stats() {
  return (
    <section className="relative py-48 bg-black overflow-hidden transition-colors duration-300">
      <HlsVideo 
        autoPlay 
        className="hidden md:block absolute inset-0 w-full h-full object-cover z-0 opacity-40 grayscale" 
        loop 
        muted 
        playsInline
        src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
      />
      <img src="https://picsum.photos/seed/stats-dark/1920/1080?blur=4" alt="Stats Background" className="md:hidden absolute inset-0 w-full h-full object-cover z-0 opacity-40 grayscale" />
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="container mx-auto px-8 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }} 
          className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-16 md:p-24 backdrop-blur-md"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl md:text-7xl font-heading italic text-white mb-2">70+</div>
              <div className="text-white/60 font-body text-[10px] uppercase tracking-[0.2em]">Websites built</div>
            </div>
            <div>
              <div className="text-5xl md:text-7xl font-heading italic text-white mb-2">9+</div>
              <div className="text-white/60 font-body text-[10px] uppercase tracking-[0.2em]">Years experience</div>
            </div>
            <div>
              <div className="text-5xl md:text-7xl font-heading italic text-white mb-2">100%</div>
              <div className="text-white/60 font-body text-[10px] uppercase tracking-[0.2em]">Client dedication</div>
            </div>
            <div>
              <div className="text-5xl md:text-7xl font-heading italic text-white mb-2">SEO</div>
              <div className="text-white/60 font-body text-[10px] uppercase tracking-[0.2em]">Optimized results</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
