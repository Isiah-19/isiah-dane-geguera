import { motion } from "motion/react";
import { useEffect, useRef } from "react";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        // If we've reached the end of the scrollable area
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll by the width of one card + gap
          const firstChild = scrollRef.current.children[0] as HTMLElement;
          const scrollAmount = firstChild ? firstChild.offsetWidth + 32 : 400; // 32px is gap-8
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 4000); // Scroll every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    { name: "Michael T.", role: "Business Owner", quote: "Working with Isiah was honestly a great experience. He redesigned our website and made it look so much more professional. Communication was easy, and he was quick to respond whenever we had changes. The site is faster and looks great on mobile now.", service: "⭐⭐⭐⭐⭐", desc: "" },
    { name: "Sarah L.", role: "Marketing Manager", quote: "Super easy to work with and very reliable. Isiah helped us fix issues on our WordPress site and optimized the speed. Everything was done faster than we expected. I’d definitely work with him again.", service: "⭐⭐⭐⭐⭐", desc: "" },
    { name: "David R.", role: "Startup Founder", quote: "He really knows WordPress and Elementor. We hired Isiah to build a landing page and it turned out better than we imagined. Clean design, fast loading, and exactly what we needed for our campaign.", service: "⭐⭐⭐⭐⭐", desc: "" },
    { name: "Jennifer K.", role: "Small Business Owner", quote: "Great attention to detail. Our old website looked outdated and messy. Isiah redesigned it and made everything feel modern and organized. We’ve already received compliments from our customers.", service: "⭐⭐⭐⭐⭐", desc: "" },
    { name: "Mark D.", role: "Agency Owner", quote: "Professional and very responsive. Every time we needed changes or updates, Isiah handled them quickly. It’s hard to find developers who communicate this well.", service: "⭐⭐⭐⭐⭐", desc: "" }
  ];

  return (
    <section className="py-32 bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-12 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: index * 0.1 }} 
              className={`min-w-[85vw] md:min-w-[45vw] lg:min-w-[calc(33.333%-1.5rem)] snap-center bg-white/[0.02] border border-white/[0.05] p-12 rounded-2xl ${index % 3 === 1 ? 'lg:mt-12' : index % 3 === 2 ? 'lg:mt-24' : ''}`}
            >
              <div className="mb-8">
                <h4 className="text-white font-body font-semibold text-lg mb-2 italic">{t.name}</h4>
                <p className="text-white/60 font-body text-sm leading-relaxed">{t.role}</p>
              </div>
              <p className="text-white/90 font-body font-light text-xl mb-12 italic leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <h4 className="text-white font-body font-semibold text-lg mb-2 italic">{t.service}</h4>
                <p className="text-white/60 font-body text-sm leading-relaxed">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
