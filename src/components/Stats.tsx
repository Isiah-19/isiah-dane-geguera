import { motion, useInView, useMotionValue, useTransform, animate, useScroll } from "motion/react";
import { useEffect, useRef } from "react";
import HlsVideo from './HlsVideo';

function Counter({ from, to, suffix = "", duration = 2 }: { from: number, to: number, suffix?: string, duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [count, inView, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section ref={containerRef} className="relative py-48 bg-black overflow-hidden transition-colors duration-300">
      <motion.div style={{ y, scale: 1.2 }} className="absolute inset-0 w-full h-full z-0">
        <HlsVideo 
          autoPlay 
          className="hidden md:block w-full h-full object-cover opacity-40 grayscale" 
          loop 
          muted 
          playsInline
          src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        />
        <img src="https://picsum.photos/seed/stats-dark/1920/1080?blur=4" alt="Stats Background" className="md:hidden w-full h-full object-cover opacity-40 grayscale" />
      </motion.div>
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
              <div className="text-5xl md:text-7xl font-heading italic text-white mb-2">
                <Counter from={0} to={70} suffix="+" />
              </div>
              <div className="text-white/60 font-body text-[10px] uppercase tracking-[0.2em]">Websites built</div>
            </div>
            <div>
              <div className="text-5xl md:text-7xl font-heading italic text-white mb-2">
                <Counter from={0} to={9} suffix="+" />
              </div>
              <div className="text-white/60 font-body text-[10px] uppercase tracking-[0.2em]">Years experience</div>
            </div>
            <div>
              <div className="text-5xl md:text-7xl font-heading italic text-white mb-2">
                <Counter from={0} to={100} suffix="%" />
              </div>
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
