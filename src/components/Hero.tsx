import { ArrowDown, ArrowUpRight } from 'lucide-react';
import portrait from '../assets/isiah-dane-about.jpg';
import './Hero.css';

export default function Hero({ onContact }: { onContact: () => void }) {
  return (
    <section className="intro-section container" id="intro" aria-labelledby="hero-title">
      <div className="intro-layout">
        <div className="intro-copy">
          <p className="intro-identity">ISIAH DANE GEGUERA <span>—</span> WEB DESIGNER & DEVELOPER</p>
          <h1 id="hero-title" aria-label="Thoughtful design. Websites that mean business.">
            <span className="intro-pretitle">Thoughtful design.</span>
            <span className="intro-line"><span>Websites that</span></span>
            <span className="intro-line"><em>mean business.</em></span>
          </h1>
          <p className="intro-description">
            I turn ideas into distinctive WordPress websites.<br />{' '}
            Built with care. Easy to use. Ready for what’s next.
          </p>
          <div className="intro-actions">
            <a className="button button-primary" href="#work">Explore my work <ArrowDown size={18} /></a>
            <button className="button intro-contact" onClick={onContact}>Have a project? <ArrowUpRight size={18} /></button>
          </div>
          <div className="intro-credentials">
            <div className="intro-person">
              <img src={portrait} alt="" width="48" height="48" />
              <div><span>Your designer. Your developer.</span><p>One person who cares about both.</p></div>
            </div>
            <div className="intro-experience">
              <span>9<span>+</span></span>
              <p>YEARS OF<br />MAKING IT WORK</p>
            </div>
          </div>
        </div>

        <div className="intro-visual" aria-label="A selection of my website projects">
          <div className="intro-visual-heading">
            <span className="intro-design-label">DESIGN ↔ DEVELOPMENT</span>
            <span className="availability"><i /> Open to projects & agency work</span>
          </div>
          <div className="intro-project-board">
            <a className="intro-featured" href="https://www.folisim.com.au" target="_blank" rel="noreferrer" aria-label="Visit Folisim Australia website (opens in a new tab)">
              <div className="intro-browser-bar">
                <span className="intro-browser-dots" aria-hidden="true"><i /><i /><i /></span>
                <span>folisim.com.au</span>
                <ArrowUpRight size={13} />
              </div>
              <div className="intro-featured-image"><img src="./projects/folisim.webp" alt="Folisim Australia website design" width="1440" height="900" fetchPriority="high" /></div>
              <div className="intro-project-caption"><span>Folisim Australia</span><span className="intro-project-arrow"><ArrowUpRight size={20} /></span></div>
            </a>
            <a className="intro-secondary" href="https://inkedbeautybar.net" target="_blank" rel="noreferrer" aria-label="Visit Inked Beauty Bar website (opens in a new tab)">
              <div className="intro-secondary-image"><img src="./projects/inked.webp" alt="Inked Beauty Bar website design" width="1440" height="900" /></div>
              <div className="intro-secondary-copy"><span>A LITTLE TASTE OF WHAT I DO ↗</span><span>inkedbeautybar.net</span></div>
              <ArrowUpRight size={19} />
            </a>
          </div>
        </div>
      </div>
      <div className="intro-bottom">
        <span>BASED IN THE PHILIPPINES. WORKING EVERYWHERE.</span>
        <a href="#work">SCROLL TO EXPLORE <ArrowDown size={14} /></a>
      </div>
    </section>
  );
}
