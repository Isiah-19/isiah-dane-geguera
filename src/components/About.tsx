import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import RevealText from "./RevealText";
import HlsVideo from './HlsVideo';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} className="relative py-48 px-8 bg-black overflow-hidden transition-colors duration-300" id="about">
      <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-black to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent z-10"></div>
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className="w-full lg:w-1/2"
          >
            <span className="text-white/60 uppercase tracking-[0.3em] text-[10px] font-body mb-6 block">About</span>
            <RevealText 
              as="h2"
              text="WordPress Developer & Web Designer" 
              className="text-5xl md:text-7xl font-heading leading-[0.9] text-white mb-8 italic" 
            />
            <p className="text-white/80 font-body font-light text-lg mb-12 leading-relaxed">Hi, I'm Isiah Dane Geguera, a WordPress Developer and Web Designer with 9+ years of experience building modern, high-performing websites. I specialize in WordPress, Elementor, UI/UX design, and SEO, helping businesses create websites that are visually appealing and optimized for growth. I’ve built 70+ websites and enjoy turning ideas into clean, effective digital experiences.</p>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <span className="text-2xl font-heading text-white italic opacity-60">01</span>
                <div>
                  <h4 className="text-white font-body font-semibold mb-2">70+ Sites Delivered</h4>
                  <p className="text-white/60 font-body text-sm">Proven track record of high-performance builds.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="text-2xl font-heading text-white italic opacity-60">02</span>
                <div>
                  <h4 className="text-white font-body font-semibold mb-2">9+ Years Expertise</h4>
                  <p className="text-white/60 font-body text-sm">Deep technical knowledge in design and SEO.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="text-2xl font-heading text-white italic opacity-60">03</span>
                <div>
                  <h4 className="text-white font-body font-semibold mb-2">Global Client Base</h4>
                  <p className="text-white/60 font-body text-sm">Trusted by agencies and startups worldwide.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            className="w-full lg:w-1/2"
          >
            <div className="rounded-xl overflow-hidden bg-white/[0.02] border border-white/[0.05] p-2">
              <motion.img 
                style={{ y, scale: 1.1 }}
                src="/profile.jpg" 
                alt="Isiah Dane Geguera and dog" 
                className="w-full rounded-lg aspect-[4/5] object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
