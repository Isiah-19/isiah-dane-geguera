import { motion } from "motion/react";
import HlsVideo from './HlsVideo';
import MagneticButton from "./MagneticButton";

export default function CTA() {
  return (
    <section className="relative py-48 bg-black overflow-hidden transition-colors duration-300" id="contact">
      <HlsVideo 
        autoPlay 
        className="hidden md:block absolute inset-0 w-full h-full object-cover z-0 opacity-40 grayscale" 
        loop 
        muted 
        playsInline
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
      />
      <img src="https://picsum.photos/seed/cta-dark/1920/1080?blur=4" alt="CTA Background" className="md:hidden absolute inset-0 w-full h-full object-cover z-0 opacity-40 grayscale" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 transition-all duration-300"></div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.8 }} 
        className="container mx-auto px-8 relative z-20 text-center"
      >
        <h2 className="text-6xl md:text-[8rem] font-heading italic text-white mb-12 leading-none">Ready to elevate your digital presence?</h2>
        <p className="text-white/80 font-body font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">Let’s collaborate to build a website that reflects the true value of your business.</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <MagneticButton href="mailto:contact@example.com" className="px-16 py-8 bg-white text-black rounded-full font-body font-bold text-xl hover:scale-105 transition-transform text-center">Get in Touch</MagneticButton>
          <MagneticButton href="https://linkedin.com" className="px-16 py-8 bg-white/[0.02] border border-white/[0.05] text-white rounded-full font-body font-bold text-xl hover:bg-white/[0.05] transition-colors text-center backdrop-blur-md">LinkedIn</MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}
