import { useEffect, useState } from 'react';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setTime(formatter.format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-black text-white pt-32 pb-12 px-8 border-t border-white/[0.05] relative z-20 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-heading italic mb-6">Isiah Dane Geguera</h3>
            <p className="text-white/60 font-body font-light max-w-sm leading-relaxed">
              Engineering bespoke, high-converting digital platforms that command authority and drive measurable growth for industry leaders.
            </p>
          </div>
          
          <div>
            <h4 className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-body mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors font-light text-sm">About</a></li>
              <li><a href="#expertise" className="text-white/80 hover:text-white transition-colors font-light text-sm">Expertise</a></li>
              <li><a href="#portfolio" className="text-white/80 hover:text-white transition-colors font-light text-sm">Selected Works</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors font-light text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-body mb-6">Connect</h4>
            <ul className="space-y-4">
              <li><a href="https://www.linkedin.com/in/isiah-dane-geguera-7496a0194/?skipRedirect=true" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition-colors font-light text-sm">LinkedIn</a></li>
              <li><a href="mailto:igeguera@gmail.com" className="text-white/80 hover:text-white transition-colors font-light text-sm">Email</a></li>
              <li><a href="https://wa.me/639772655441" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition-colors font-light text-sm">WhatsApp</a></li>
            </ul>
            <div className="mt-12">
              <h4 className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-body mb-2">Local Time</h4>
              <p className="text-white/80 font-light text-sm">Manila, PH &mdash; {time || '10:41 AM'}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center border-t border-white/[0.05] pt-12">
          <h2 className="text-[12vw] leading-none font-heading font-black italic tracking-tighter text-white/[0.03] hover:text-white/20 transition-colors duration-700 ease-in-out select-none text-center w-full">
            ISIAH GEGUERA
          </h2>
          <div className="w-full flex flex-col md:flex-row justify-between items-center mt-8 text-white/40 font-body font-light text-xs tracking-wide">
            <p>© {new Date().getFullYear()} Isiah Dane Geguera. All rights reserved.</p>
            <p className="mt-4 md:mt-0">Designed & Engineered for Excellence.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
