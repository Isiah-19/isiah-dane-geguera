import { motion } from "motion/react";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-black transition-colors duration-300">
      <video 
        autoPlay 
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60" 
        loop 
        muted 
        playsInline 
        poster="https://picsum.photos/seed/hero-dark/1920/1080?blur=2"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260215_121759_424f8e9c-d8bd-4974-9567-52709dfb6842.mp4" type="video/mp4"/>
      </video>
      <div className="absolute inset-0 z-10 hero-gradient h-[400px] mt-auto"></div>
      <div className="absolute inset-0 z-10 bg-black/10"></div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }} 
        className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-40"
      >
        <h1 className="text-6xl md:text-[8rem] leading-[0.85] font-heading tracking-tighter mb-8 text-white">High-Performance Web Design & SEO for Industry Leaders.</h1>
        <p className="font-body font-light text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">I’m Isiah Dane Geguera, a Senior Digital Designer & Technical SEO Specialist. With 9+ years of expertise, I engineer bespoke, high-converting digital platforms that command authority and drive measurable growth.</p>
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
          <MagneticButton href="#portfolio" className="px-10 py-5 bg-white text-black rounded-full font-body font-semibold tracking-wide hover:scale-105 transition-transform text-center">Partner With Me</MagneticButton>
          <MagneticButton href="#contact" className="px-10 py-5 bg-white/[0.02] border border-white/[0.05] backdrop-blur-md text-white rounded-full font-body font-semibold tracking-wide hover:bg-white/[0.05] transition-colors text-center">Contact Me</MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}
