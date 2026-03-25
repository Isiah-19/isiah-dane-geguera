import { motion } from "motion/react";

export default function Testimonials() {
  const testimonials = [
    { name: "Sarah Jenkins", role: "Founder @ Apex Digital, London", quote: "Isiah transformed our digital identity. The site feels less like a portfolio and more like a high-end luxury brand experience.", service: "Web Design", desc: "Full Scale Redesign" },
    { name: "Marcus Chen", role: "CTO @ Nexus AI, San Francisco", quote: "Speed was our priority. They delivered a complex, animated interface in less than a week. Unparalleled execution.", service: "Development", desc: "Technical Build" },
    { name: "Elena Rostova", role: "CMO @ Vesper Group, Sydney", quote: "The combination of SEO performance and editorial aesthetic is exactly what the modern web needs. Worth every cent.", service: "SEO & Marketing", desc: "Optimization & Strategy" }
  ];

  return (
    <section className="py-32 bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: index * 0.1 }} 
              className={`bg-white/[0.02] border border-white/[0.05] p-12 rounded-2xl ${index === 1 ? 'lg:mt-12' : index === 2 ? 'lg:mt-24' : ''}`}
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
