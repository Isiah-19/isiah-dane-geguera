import { motion } from "motion/react";
import { useState } from "react";

const faqs = [
  { q: "What services do you offer?", a: "I specialize in WordPress development, Elementor websites, website redesigns, landing pages, and website optimization. I also help businesses improve their SEO, performance, and overall user experience." },
  { q: "How much does a website cost?", a: "The cost depends on the size and complexity of the project. Simple landing pages can start at a lower rate, while full business websites with custom features may require a larger budget. I’m happy to discuss your project and provide a clear estimate." },
  { q: "How long does it take to build a website?", a: "Most websites take 3–10 days depending on the number of pages, design complexity, and revisions needed." },
  { q: "Do you redesign existing websites?", a: "Yes. If you already have a website but it looks outdated or performs poorly, I can redesign and optimize it for modern design, speed, and conversions." },
  { q: "Will my website be mobile-friendly?", a: "Absolutely. Every website I build is fully responsive, meaning it works perfectly on mobile, tablet, and desktop devices." },
  { q: "Do you provide SEO optimization?", a: "Yes. I implement basic on-page SEO, including optimized structure, fast loading speeds, and proper metadata to help your website rank better in search engines." },
  { q: "Can you help maintain my website after launch?", a: "Yes. I can help with ongoing website maintenance, updates, security, and performance optimization if needed." },
  { q: "What tools or platforms do you use?", a: "I mainly work with WordPress, Elementor, HTML, CSS, JavaScript, and modern web technologies to create fast and professional websites." },
  { q: "How do we start working together?", a: "You can simply contact me through the contact form or email, and we can discuss your project, timeline, and goals." },
  { q: "Do you work with international clients?", a: "Yes. I work with clients worldwide and communicate through email, Slack, or video calls depending on the project." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-black transition-colors duration-300" id="faq">
      <div className="max-w-4xl mx-auto px-8 w-full">
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
