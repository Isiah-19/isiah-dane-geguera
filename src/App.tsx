import { useState, type CSSProperties } from 'react';
import { ArrowUpRight, ArrowRight, ArrowLeft, Menu, X, Check, MessageCircle } from 'lucide-react';
import portrait from './assets/isiah-dane-about.jpg';

const projects = [
  {name:'Folisim Australia', domain:'www.folisim.com.au', category:'Beauty & aesthetics', label:'Scalp micropigmentation · Australia', color:'#46554a'},
  {name:'Wolfcrete', domain:'wolfcreteky.com', category:'Local services', label:'Concrete services · United States', color:'#5d6556'},
  {name:'Diana Marie Aesthetics', domain:'www.dianamarie.co.uk', category:'Beauty & aesthetics', label:'Aesthetics · United Kingdom', color:'#8b6d68'},
  {name:'Inked Beauty Bar', domain:'inkedbeautybar.net', category:'Beauty & aesthetics', label:'Beauty · United States', color:'#624b58'},
  {name:'Lucie Oliver Aesthetics', domain:'lucieoliveraesthetics.co.uk', category:'Beauty & aesthetics', label:'Aesthetics · United Kingdom', color:'#6b6a5d'},
  {name:'GO Destination Services', domain:'godestinationservices.com', category:'Corporate', label:'Destination services · United States', color:'#334c68'},
];
const screenshots: Record<string,string> = {'www.folisim.com.au':'folisim','wolfcreteky.com':'wolfcrete','www.dianamarie.co.uk':'diana','inkedbeautybar.net':'inked','lucieoliveraesthetics.co.uk':'lucie','godestinationservices.com':'go'};
const categories = ['All work','Beauty & aesthetics','Local services','Corporate'];
const services = [
  ['Design a new website','A clear, modern WordPress website built around your business and the people you want to reach.'],
  ['Give my current site a refresh','Sharper layouts, clearer messaging, and a mobile experience that feels considered from start to finish.'],
  ['Build a landing page','A focused page for one service or campaign, with a clear path from first visit to enquiry.'],
  ['Improve my website’s SEO','Technical and on-page improvements to help search engines understand your site and visitors find their way.'],
  ['Keep my WordPress site running','Ongoing updates, troubleshooting, and practical improvements as your business grows.'],
];
function ProjectImage({domain, name, mobile = false}:{domain:string;name:string;mobile?:boolean}) {
  const [failed,setFailed] = useState(false);
  return <div className={`project-image ${mobile ? 'mobile-image' : ''}`}>
    <div className="image-fallback"><span>SELECTED WEBSITE</span><strong>{name}</strong><a href={`https://${domain}`} target="_blank" rel="noreferrer">Explore the live website <ArrowUpRight size={18}/></a></div>
    {!failed && <img src={`./projects/${screenshots[domain]}.webp`} alt={`${name} website preview`} onError={()=>setFailed(true)} loading="eager" />}
  </div>;
}
export default function App() {
  const [category,setCategory] = useState('All work');
  const [index,setIndex] = useState(0);
  const [menu,setMenu] = useState(false);
  const [service,setService] = useState<number|null>(null);
  const filtered = projects.filter(p=>category==='All work'||p.category===category);
  const project = filtered[index % filtered.length];
  const move = (direction:number)=>setIndex(i=>(i+direction+filtered.length)%filtered.length);
  const email = (subject:string)=>`mailto:igeguera@gmail.com?subject=${encodeURIComponent(subject)}`;
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="header-inner">
      <a className="wordmark" href="#main" aria-label="Isiah Dane home">isiah<span>.dane</span></a>
      <button className="menu-button" aria-label={menu?'Close navigation':'Open navigation'} aria-expanded={menu} aria-controls="navigation" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
      <nav id="navigation" className={menu?'navigation open':'navigation'} aria-label="Main navigation">
        <a href="#services" onClick={()=>setMenu(false)}>What I do</a><a href="#work" onClick={()=>setMenu(false)}>Selected work</a><a href="#about" onClick={()=>setMenu(false)}>About me</a><a className="button small" href={email('Let’s talk about my website')}>Let’s talk <ArrowUpRight size={16}/></a>
      </nav>
    </div></header>
    <main id="main">
      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="intro">
          <p className="eyebrow"><span className="status-dot"/> INDEPENDENT WEB DESIGNER · PHILIPPINES</p>
          <h1 id="hero-title">Good websites.<br/>Made <span>personal.</span></h1>
          <p className="hero-description">I’m Isiah. I build clear, thoughtful WordPress websites that help businesses make a better first impression—and make the next step easy.</p>
          <div className="service-list" id="services"><h2>What can I help you with?</h2>
            {services.map(([title,description],i)=><div className="service" key={title}>
              <button aria-expanded={service===i} aria-controls={`service-${i}`} onClick={()=>setService(service===i?null:i)}><span>{title}</span><ArrowUpRight size={20}/></button>
              {service===i&&<div className="service-detail" id={`service-${i}`}><p>{description}</p><a href={email(title)}>Tell me about your project <ArrowRight size={15}/></a></div>}
            </div>)}
          </div>
          <p className="intro-note">You bring the idea. I’ll take care of the website.</p>
        </div>
        <div className="work-showcase" id="work">
          <div className="showcase-heading"><span className="eyebrow">A FEW THINGS I’VE BUILT</span><span className="work-count">0{projects.length} PROJECTS</span></div>
          <div className="filters" aria-label="Filter projects">{categories.map(c=><button key={c} aria-pressed={category===c} className={category===c?'active':''} onClick={()=>{setCategory(c);setIndex(0)}}>{c}</button>)}</div>
          <div className="device-stage" style={{'--project-color':project.color} as CSSProperties}>
            <div className="stage-number" aria-hidden="true">0{projects.indexOf(project)+1}</div>
            <div className="laptop" key={project.domain}><div className="laptop-screen"><div className="browser-bar"><div className="browser-dots"><i/><i/><i/></div><span>{project.domain}</span><ArrowUpRight size={11}/></div><ProjectImage domain={project.domain} name={project.name}/></div><div className="laptop-base"><span/></div></div>
            <div className="phone" aria-hidden="true"><div className="phone-notch"/><ProjectImage key={project.domain} domain={project.domain} name={project.name} mobile/></div>
            <div className="stage-label">DESIGNED TO WORK. ON EVERY SCREEN.</div>
          </div>
          <div className="project-caption" aria-live="polite" aria-atomic="true"><div className="carousel-controls"><button aria-label="Previous project" onClick={()=>move(-1)}><ArrowLeft size={18}/></button><span>{String(index+1).padStart(2,'0')} / {String(filtered.length).padStart(2,'0')}</span><button aria-label="Next project" onClick={()=>move(1)}><ArrowRight size={18}/></button></div><div className="project-info"><h2>{project.name}</h2><p>{project.label}</p><a href={`https://${project.domain}`} target="_blank" rel="noreferrer">Visit website <ArrowUpRight size={14}/></a></div></div>
        </div>
      </section>
      <div className="credentials"><div className="wrap credential-inner"><span><Check size={18}/><strong>9+ years</strong> of hands-on experience</span><span><Check size={18}/>WordPress · Elementor · Divi · Salient</span><span><Check size={18}/>Working with clients in the US, UK & Australia</span></div></div>
      <section className="about-section wrap" id="about"><div className="portrait-wrap"><img src={portrait} alt="Isiah Dane Geguera with his dog" loading="lazy"/><span>THE PERSON BEHIND THE PIXELS</span></div><div className="about-copy"><p className="eyebrow">A DESIGNER. A BUILDER. YOUR EXTRA PAIR OF HANDS.</p><h2>Good work starts with<br/>someone who cares.</h2><p>I’m Isiah Dane Geguera, a WordPress designer and developer based in the Philippines. For over nine years, I’ve helped businesses and agencies turn ideas into websites that are easy to use and easy to manage.</p><p>From a fresh Elementor build to the small fixes on an existing site, I bring the same attention to the details. You work directly with me, with clear updates and a practical approach.</p><a className="text-link" href={email('I’d like to work with you')}>Let’s build something useful <ArrowUpRight size={18}/></a></div></section>
      <section className="contact-section" id="contact"><div className="wrap contact-inner"><div><p className="eyebrow">HAVE A PROJECT IN MIND?</p><h2>Let’s make it happen.</h2><p>Send me your website, your idea, or simply where you’re stuck.</p></div><a className="button" href={email('A website project for Isiah')}>Tell me about it <ArrowUpRight size={20}/></a></div></section>
    </main>
    <footer className="footer"><div className="wrap footer-inner"><a className="wordmark" href="#main">isiah<span>.dane</span></a><span>© {new Date().getFullYear()} Isiah Dane Geguera</span><a href="mailto:igeguera@gmail.com">igeguera@gmail.com <ArrowUpRight size={14}/></a><a href="https://wa.me/639772655441" target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp</a><a href="https://github.com/Isiah-19" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14}/></a></div></footer>
  </>;
}
