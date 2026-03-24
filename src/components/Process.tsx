import { motion } from "motion/react";

export default function Process() {
  const steps = [
    { num: "01", title: "Discovery & Architecture", desc: "Deep-dive into your business goals, audience psychology, and technical requirements to blueprint a scalable foundation." },
    { num: "02", title: "Bespoke Engineering", desc: "Crafting pixel-perfect, high-performance interfaces using modern frameworks like React and Next.js for flawless execution." },
    { num: "03", title: "SEO & Performance Tuning", desc: "Rigorous optimization of site speed, accessibility, and technical SEO structure to ensure maximum search visibility." },
    { num: "04", title: "Launch & Scale", desc: "Seamless deployment followed by concierge-level support, continuous monitoring, and iterative conversion rate optimization." }
  ];

  return (
    <section className="py-32 bg-black transition-colors duration-300" id="process">
      <div className="container mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }} 
          className="mb-24 md:w-1/2"
        >
          <span className="text-white/60 uppercase tracking-[0.3em] text-[10px] font-body mb-4 block">Methodology</span>
          <h2 className="text-5xl md:text-6xl font-heading italic text-white mb-6">The Signature Framework</h2>
          <p className="text-white/80 font-body font-light text-lg leading-relaxed">A proven, four-step system designed to eliminate friction, elevate brand perception, and engineer measurable growth.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: index * 0.1 }} 
              className="relative pl-8 md:pl-12 border-l border-white/10"
            >
              <span className="absolute -left-[1px] top-0 w-[2px] h-8 bg-white"></span>
              <span className="text-sm font-body text-white/40 tracking-widest mb-4 block">{step.num}</span>
              <h3 className="text-2xl font-heading italic text-white mb-4">{step.title}</h3>
              <p className="text-white/60 font-body font-light leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
