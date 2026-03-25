export default function Navbar() {
  return (
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
      <a className="inline-flex items-center justify-center px-6 py-2 rounded-full font-body font-semibold text-xs uppercase tracking-widest transition-all active:scale-95 text-center border border-white/20 text-white hover:bg-white hover:text-black" href="#contact">
        Let's Talk
      </a>
    </nav>
  );
}
