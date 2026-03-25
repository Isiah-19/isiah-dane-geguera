import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl rounded-full border border-white/10 bg-black/5 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.3)] z-[100] flex justify-between items-center px-8 py-3 transition-all duration-300">
        <div className="flex items-center">
          <a className="text-xl font-black tracking-tighter text-white italic font-heading" href="#">ISIAH GEGUERA</a>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="font-body font-semibold tracking-wide uppercase text-xs text-white/60 hover:text-white transition-colors" href="#about">About</a>
          <a className="font-body font-semibold tracking-wide uppercase text-xs text-white/60 hover:text-white transition-colors" href="#expertise">Expertise</a>
          <a className="font-body font-semibold tracking-wide uppercase text-xs text-white/60 hover:text-white transition-colors" href="#portfolio">Portfolio</a>
          <a className="font-body font-semibold tracking-wide uppercase text-xs text-white/60 hover:text-white transition-colors" href="#contact">Contact</a>
        </div>
        <div className="hidden md:flex">
          <a className="inline-flex items-center justify-center px-6 py-2 rounded-full font-body font-semibold text-xs uppercase tracking-widest transition-all active:scale-95 text-center border border-white/20 text-white hover:bg-white hover:text-black" href="#contact">
            Let's Talk
          </a>
        </div>
        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <a className="font-body font-semibold tracking-wide uppercase text-2xl text-white/60 hover:text-white transition-colors" href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a className="font-body font-semibold tracking-wide uppercase text-2xl text-white/60 hover:text-white transition-colors" href="#expertise" onClick={() => setIsOpen(false)}>Expertise</a>
            <a className="font-body font-semibold tracking-wide uppercase text-2xl text-white/60 hover:text-white transition-colors" href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a>
            <a className="font-body font-semibold tracking-wide uppercase text-2xl text-white/60 hover:text-white transition-colors" href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            <a className="mt-8 inline-flex items-center justify-center px-8 py-4 rounded-full font-body font-semibold text-sm uppercase tracking-widest transition-all active:scale-95 text-center border border-white/20 text-white hover:bg-white hover:text-black" href="#contact" onClick={() => setIsOpen(false)}>
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
