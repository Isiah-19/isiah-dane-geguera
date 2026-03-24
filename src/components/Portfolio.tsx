import { motion } from "motion/react";

export default function Portfolio() {
  const projects = [
    { title: "Folisim Australia", url: "www.folisim.com.au", tags: ["UI/UX", "Frontend"], roi: "+210% Lead Conversion Rate", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7JzErHGr7IXiEwYJfNjl-JPjXRA-8IdOI_cVZe6iGuFta2lTSfUMrGmD-EQwMutoUv4ov798cGaw7Xt6rY8HRC839DlZ5cb0ruM09WmCXFdh3PNoMl1Ev8uzx7nOkP_txJa_kNEf_3CeTifkTQ0TUGE6werdnLIUWdWKRFvDGqVve-95HNO8ITvW5wshRy5YVvbZzVF2BLfNXBhBHBvSaXRq3Fn9Ya_nWRT9Gt_e0OG-T1nSHWJTh1KRSa3VpjcFoq2f5_evmeIY" },
    { title: "Wolfcrete", url: "wolfcreteky.com", tags: ["SaaS", "SEO"], roi: "Page 1 Ranking in 4 Months", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDh1K5uT4jdkJAOub1iV5S_3hivB-H1NMueWgUAgRWWkWFQe27wnwVVm7klfREWt4D0Ql8V4oSy8MxBzz19aM8ucdsfDZ7KnQoeQgyhFvV_Ou2AgNCUa1c-jqOE238Zo7bl53QbQt4bwbLSScLKgsSZ0mf21Qh12BAFKG5neOy0M-GfRZCS0qRqwx6gw3mpZWlvsG_ZI8XIAh95vXMhDA3Tmf8pc888d1D0RhXdMhAMFuqCajgY6LvwLs3cdGZ5U9ES8cn1qmOB2WI" },
    { title: "Diana Marie Aesthetics", url: "www.dianamarie.co.uk", tags: ["Retail", "Architecture"], roi: "3x Increase in Online Bookings", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2T8Y8-fVz4oE-GfC-0TzM-P3g4J9-G0Z4P9-G0Z4P9-G0Z4P9-G0Z4P9-G0Z4P9-G0Z4P9-G0Z4P9-G0Z4P9-G0Z4P" },
    { title: "Inked Beauty Bar", url: "inkedbeautybar.net", tags: ["Beauty", "Web Design"], roi: "Award-Winning UI Design", img: "https://picsum.photos/seed/inked/800/600" },
    { title: "Lucie Oliver Aesthetics", url: "lucieoliveraesthetics.co.uk", tags: ["Aesthetics", "SEO"], roi: "+150% Organic Traffic", img: "https://picsum.photos/seed/lucie/800/600" },
    { title: "Aura Skin Clinic", url: "auraskin.co.uk", tags: ["Clinic", "Frontend"], roi: "Reduced Bounce Rate by 45%", img: "https://picsum.photos/seed/aura/800/600" }
  ];

  return (
    <section className="py-32 bg-black transition-colors duration-300" id="portfolio">
      <div className="container mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }} 
          className="text-center mb-24"
        >
          <span className="text-white/60 uppercase tracking-[0.3em] text-[10px] font-body mb-4 block">Work</span>
          <h2 className="text-5xl md:text-7xl font-heading italic text-white">Selected Works</h2>
          <p className="text-white/80 font-body font-light text-lg max-w-2xl mx-auto mt-4">A curated showcase of digital platforms built for performance and high-end brand representation.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: index * 0.1 }} 
              className="bg-white/[0.02] border border-white/[0.05] rounded-3xl overflow-hidden group"
            >
              <div className="p-4 relative overflow-hidden">
                <img className="w-full h-[300px] object-cover rounded-2xl group-hover:scale-[1.02] group-hover:brightness-50 transition-all duration-500" alt={project.title} src={project.img}/>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none">
                  <span className="text-white/80 text-[10px] uppercase tracking-widest font-body mb-2">Impact</span>
                  <span className="text-white font-heading italic text-2xl text-center px-4">{project.roi}</span>
                </div>
              </div>
              <div className="p-8 pt-4">
                <h3 className="text-3xl font-heading italic text-white mb-2">{project.title}</h3>
                <p className="text-white/60 font-body font-light text-sm mb-6">{project.url}</p>
                <div className="flex gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-white/60 uppercase tracking-widest font-body">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
