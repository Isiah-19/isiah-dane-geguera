import { motion, useScroll, useTransform } from "motion/react";
import MagneticButton from "./MagneticButton";
import RevealText from "./RevealText";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  isReady?: boolean;
}

export default function Hero({ isReady = true }: HeroProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [0.6, 0]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-black transition-colors duration-300">
      <motion.video 
        style={{ y, opacity }}
        autoPlay 
        className="absolute inset-0 w-full h-full object-cover z-0" 
        loop 
        muted 
        playsInline 
        disablePictureInPicture
        onEnded={(e) => {
          e.currentTarget.currentTime = 0;
          e.currentTarget.play();
        }}
      >
        <source src="https://cdn.pixabay.com/video/2020/05/25/40131-424916846_large.mp4" type="video/mp4"/>
      </motion.video>
      <div className="absolute inset-0 z-10 hero-gradient h-[400px] mt-auto"></div>
      <div className="absolute inset-0 z-10 bg-black/10"></div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} 
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} 
        className="relative z-20 text-center px-4 max-w-5xl mx-auto"
      >
        <RevealText 
          as="h1"
          text="Building High-Performing Websites & Digital Experiences." 
          className="text-6xl md:text-[8rem] leading-[0.85] font-heading tracking-tighter mb-8 text-white" 
          delay={0.4}
          isReady={isReady}
        />
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-body font-light text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Specializing in premium web design, advanced WordPress development, and intuitive UI/UX. I engineer bespoke, scalable platforms that elevate brands and drive measurable growth.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8"
        >
          <MagneticButton href="#portfolio" className="px-10 py-5 bg-white text-black rounded-full font-body font-semibold tracking-wide hover:scale-105 transition-transform text-center">
            Explore My Work
          </MagneticButton>
          <a href="#contact" className="group flex items-center gap-2 text-white font-body font-semibold tracking-wide hover:text-white/70 transition-colors">
            <span>Start a Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
