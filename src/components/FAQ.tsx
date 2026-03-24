import { motion } from "motion/react";
import { useState } from "react";

const faqs = [
  { q: "Do you work with startups?", a: "Only if they have a clear product-market fit and a budget allocated for serious growth. I partner with brands ready to scale, not those still testing the waters." },
  { q: "What is your minimum engagement?", a: "Projects start at $10,000. I do not compete on price; I compete on measurable ROI, flawless execution, and premium brand positioning." },
  { q: "How long does a typical project take?", a: "A bespoke digital platform typically takes 6 to 8 weeks from discovery to launch, depending on complexity and technical requirements." },
  { q: "Do you offer ongoing support?", a: "Yes. I offer concierge-level retainers for select clients to handle continuous SEO optimization, security, and performance scaling." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-black transition-colors duration-300" id="faq">
      <div className="container mx-auto px-8 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }} 
          className="text-center mb-20"
        >
          <span className="text-white/60 uppercase tracking-[0.3em] text-[10px] font-body mb-4 block">Qualification</span>
          <h2 className="text-5xl font-heading italic text-white">Frequently Asked Questions</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: index * 0.1 }} 
              className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.01]"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none cursor-pointer"
              >
                <span className="font-heading italic text-xl text-white">{faq.q}</span>
                <span className="text-white/40 text-2xl font-light">{openIndex === index ? '−' : '+'}</span>
              </button>
              <motion.div 
                initial={false}
                animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                className="overflow-hidden"
              >
                <p className="px-8 pb-6 text-white/60 font-body font-light leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
