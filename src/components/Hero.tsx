import { ArrowDown, ArrowUpRight } from 'lucide-react';
import portrait from '../assets/isiah-dane-about.jpg';
import './Hero.css';

function DesignMark() {
  return <div className="design-mark" aria-hidden="true"><svg viewBox="0 0 100 100" fill="none">
    {Array.from({ length: 8 }, (_, i) => <ellipse key={i} cx="50" cy="50" rx="13" ry="45" stroke="currentColor" strokeWidth=".8" transform={`rotate(${i * 22.5} 50 50)`} />)}
  </svg></div>;
}

export default function Hero({ onContact }: { onContact: () => void }) {
  return <section className="intro-section container" id="intro" aria-labelledby="hero-title">
    <div className="intro-topline">
      <p className="intro-identity">ISIAH DANE GEGUERA <span>—</span> WEB DESIGNER & DEVELOPER</p>
      <span className="availability"><i /> Open to projects & agency work</span>
    </div>

    <div className="intro-title-row">
      <h1 id="hero-title" aria-label="Thoughtful design. Websites that mean business.">
        <span className="intro-pretitle">Thoughtful design.</span>
        <span className="intro-line"><span>Websites that</span></span>
        <span className="intro-line intro-serif"><em>mean business.</em></span>
      </h1>
      <div className="intro-signature"><DesignMark /><span>DESIGN ↔<br />DEVELOPMENT</span></div>
    </div>

    <div className="intro-deck">
      <p className="intro-description">I turn ideas into distinctive WordPress websites.<br />Built with care. Easy to use. Ready for what’s next.</p>
      <div className="intro-actions">
        <a className="button button-primary" href="#work">Explore my work <ArrowDown size={18} /></a>
        <button className="button intro-contact" onClick={onContact}>Have a project? <ArrowUpRight size={18} /></button>
      </div>
    </div>

    <div className="intro-showcase" aria-label="A selection of my website projects">
      <div className="intro-showcase-label"><span>A LITTLE TASTE OF WHAT I DO ↗</span><span>01 — 02</span></div>
      <div className="intro-projects">
        <a className="intro-project intro-featured" href="https://www.folisim.com.au" target="_blank" rel="noreferrer" aria-label="Visit Folisim Australia website (opens in a new tab)">
          <div className="intro-browser-bar"><span className="intro-browser-dots" aria-hidden="true"><i /><i /><i /></span><span>folisim.com.au</span><ArrowUpRight size={12} /></div>
          <div className="intro-project-image"><img src="./projects/folisim.webp" alt="Folisim Australia website design" width="1440" height="900" fetchPriority="high" /></div>
          <div className="intro-project-caption"><span>Folisim Australia</span><ArrowUpRight size={19} /></div>
        </a>
        <a className="intro-project intro-secondary" href="https://inkedbeautybar.net" target="_blank" rel="noreferrer" aria-label="Visit Inked Beauty Bar website (opens in a new tab)">
          <div className="intro-browser-bar"><span className="intro-browser-dots" aria-hidden="true"><i /><i /><i /></span><span>inkedbeautybar.net</span><ArrowUpRight size={12} /></div>
          <div className="intro-project-image"><img src="./projects/inked.webp" alt="Inked Beauty Bar website design" width="1440" height="900" /></div>
          <div className="intro-project-caption"><span>inkedbeautybar.net</span><ArrowUpRight size={19} /></div>
        </a>
      </div>
    </div>

    <div className="intro-credentials">
      <div className="intro-person"><img src={portrait} alt="" width="48" height="48" /><div><span>Your designer. Your developer.</span><p>One person who cares about both.</p></div></div>
      <div className="intro-experience"><span>9<sup>+</sup></span><p>YEARS OF<br />MAKING IT WORK</p></div>
      <div className="intro-location"><span>BASED IN THE PHILIPPINES.<br />WORKING EVERYWHERE.</span><a href="#work" aria-label="Scroll to explore selected work"><ArrowDown size={20} /><span>SCROLL TO EXPLORE</span></a></div>
    </div>
  </section>;
}
