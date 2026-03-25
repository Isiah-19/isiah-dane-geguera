import { motion } from "motion/react";

export default function Portfolio() {
  const projects = [
    { title: "Folisim Australia", url: "www.folisim.com.au", tags: ["UI/UX", "Frontend"], roi: "+210% Lead Conversion Rate", img: "https://api.microlink.io/?url=https://www.folisim.com.au&screenshot=true&meta=false&embed=screenshot.url" },
    { title: "Wolfcrete", url: "wolfcreteky.com", tags: ["CMS", "SEO"], roi: "Page 1 Ranking in 4 Months", img: "https://api.microlink.io/?url=https://wolfcreteky.com&screenshot=true&meta=false&embed=screenshot.url" },
    { title: "Diana Marie Aesthetics", url: "www.dianamarie.co.uk", tags: ["Retail", "Architecture"], roi: "3x Increase in Online Bookings", img: "https://api.microlink.io/?url=https://www.dianamarie.co.uk&screenshot=true&meta=false&embed=screenshot.url" },
    { title: "Inked Beauty Bar", url: "inkedbeautybar.net", tags: ["Beauty", "Web Design"], roi: "Award-Winning UI Design", img: "https://api.microlink.io/?url=https://inkedbeautybar.net&screenshot=true&meta=false&embed=screenshot.url" },
    { title: "Lucie Oliver Aesthetics", url: "lucieoliveraesthetics.co.uk", tags: ["Aesthetics", "SEO"], roi: "+150% Organic Traffic", img: "https://s.wordpress.com/mshots/v1/https://lucieoliveraesthetics.co.uk?w=800" },
    { title: "GO Destination Services", url: "godestinationservices.com", tags: ["Corporate", "SEO"], roi: "Global Reach Expansion", img: "https://api.microlink.io/?url=https://godestinationservices.com/&screenshot=true&meta=false&embed=screenshot.url" }
  ];

  return (
    <section className="py-32 bg-black transition-colors duration-300" id="portfolio">
      <div className="max-w-7xl mx-auto px-8 w-full">
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
                <a href={`https://${project.url}`} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors font-body font-light text-sm mb-6 block">{project.url}</a>
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
