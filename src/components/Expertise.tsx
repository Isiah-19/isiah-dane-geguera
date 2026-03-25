import { motion } from "motion/react";

export default function Expertise() {
  const skills = [
    { num: "01", title: "Bespoke Web Design", desc: "Creating intuitive, minimalist layouts that deliver a premium user experience across all devices." },
    { num: "02", title: "Development", desc: "React, Next.js, Tailwind CSS, TypeScript." },
    { num: "03", title: "Search Engine Optimization (SEO)", desc: "Implementing technical, on-page, and off-page strategies to ensure your business ranks at the top of search results." },
    { num: "04", title: "Concierge Web Maintenance", desc: "Providing seamless, ongoing support, security updates, and performance optimization so you can focus on running your business." }
  ];

  return (
    <section className="py-32 bg-black transition-colors duration-300" id="expertise">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }} 
          className="mb-20"
        >
          <span className="text-white/60 uppercase tracking-[0.3em] text-[10px] font-body mb-4 block">Expertise</span>
          <h2 className="text-5xl font-heading italic text-white">Premium Web Design &amp; Technical SEO Services</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: index * 0.1 }} 
              className="bg-white/[0.02] border border-white/[0.05] p-8 rounded-2xl flex flex-col gap-6 group hover:bg-white/[0.04] transition-all"
            >
              <span className="text-5xl font-heading italic text-white/40 group-hover:text-white transition-colors">{skill.num}</span>
              <div>
                <h4 className="text-white font-body font-semibold text-lg mb-2 italic">{skill.title}</h4>
                <p className="text-white/60 font-body text-sm leading-relaxed">{skill.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
