import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { ArrowUpRight, ArrowDown, Check, Copy, Menu, X, Plus, Minus, MessageCircle, Code2, Layers, Search, Wrench } from 'lucide-react';
import portrait from './assets/isiah-dane-about.jpg';
import { projects, filters, pageSize, type Project } from './data/projects';

const emailAddress = 'igeguera@gmail.com';
const emailLink = `mailto:${emailAddress}?subject=Let%E2%80%99s%20talk%20about%20my%20website`;
const services = [
  {icon:Layers,title:'Web design & WordPress',number:'01',summary:'From a blank canvas to a website that feels like you.',text:'Thoughtful layouts, clear page structure, and responsive WordPress builds. I work with Elementor, Divi, and Salient, and can build from your brand guide or help shape a new direction.',tags:'ELEMENTOR / DIVI / SALIENT'},
  {icon:Code2,title:'Landing pages & redesigns',number:'02',summary:'A stronger first impression. A clearer next step.',text:'Focused landing pages for a service or campaign, and considered redesigns for websites that need a fresh start. Built around your message, your visitors, and the action you want them to take.',tags:'LANDING PAGES / UI DESIGN / RESPONSIVE BUILDS'},
  {icon:Search,title:'SEO & site improvements',number:'03',summary:'The details that make a website easier to find and use.',text:'Practical on-page SEO, technical improvements, and performance work. From heading structure and metadata to mobile usability, I help make your website clearer for people and search engines.',tags:'ON-PAGE SEO / TECHNICAL SEO / PERFORMANCE'},
  {icon:Wrench,title:'Ongoing website support',number:'04',summary:'A reliable pair of hands after launch, too.',text:'Plugin and theme updates, backups, troubleshooting, and everyday changes. Useful support for business owners and agencies who want someone to take care of the website details.',tags:'MAINTENANCE / TROUBLESHOOTING / AGENCY SUPPORT'},
];
function useReveals(filter: string, visibleCount: number) {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.05, rootMargin: '0px 0px 35px 0px' });
    nodes.forEach(node => { node.classList.add('will-reveal'); observer.observe(node); });
    return () => { observer.disconnect(); nodes.forEach(node => node.classList.remove('will-reveal')); };
  }, [filter, visibleCount]);
}

function Header({ onContact }: { onContact: () => void }) {
  const [menu, setMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) setActiveSection(entry.target.id);
    }), { rootMargin: '-15% 0px -70% 0px' });
    document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menu) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setMenu(false); toggle.current?.focus(); }
    };
    const onOutside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setMenu(false);
    };
    const media = window.matchMedia('(min-width: 761px)');
    const onResize = () => { if (media.matches) setMenu(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onOutside);
    media.addEventListener('change', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onOutside);
      media.removeEventListener('change', onResize);
    };
  }, [menu]);

  return <header ref={header} className="site-header" onBlur={event => {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) setMenu(false);
  }}>
    <div className="reading-progress" aria-hidden="true" />
    <div className="container nav-inner">
      <a className="brand" href="#main" aria-label="Isiah Dane Geguera home" onClick={() => setMenu(false)}>isiah<span className="brand-star" aria-hidden="true">✳</span></a>
      <button ref={toggle} className="menu-toggle" aria-label={menu ? 'Close navigation' : 'Open navigation'} aria-expanded={menu} aria-controls="main-navigation" onClick={() => setMenu(value => !value)}>{menu ? <X /> : <Menu />}</button>
      <nav id="main-navigation" className={menu ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
        <a href="#work" aria-current={activeSection === 'work' ? 'location' : undefined} onClick={() => setMenu(false)}>Work<span>{projects.length}</span></a>
        <a href="#expertise" aria-current={activeSection === 'expertise' ? 'location' : undefined} onClick={() => setMenu(false)}>What I do</a>
        <a href="#about" aria-current={activeSection === 'about' ? 'location' : undefined} onClick={() => setMenu(false)}>About</a>
        <button className="nav-contact" onClick={() => { setMenu(false); onContact(); }}>Let’s talk <ArrowUpRight size={17} /></button>
      </nav>
    </div>
  </header>;
}

function ProjectCard({project,index}:{project:Project;index:number}) {
  const [imageFailed,setImageFailed] = useState(false);
  return <article id={`project-${project.id}`} tabIndex={-1} className="project-card" data-reveal style={{'--reveal-delay': `${index % 2 * 80}ms`} as CSSProperties}>
    <a className="project-visual" href={`https://${project.domain}`} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name} website (opens in a new tab)`}>
      <span className="project-index">SELECTED WORK / {String(index+1).padStart(2,'0')}</span>
      <div className="site-preview"><div className="preview-toolbar"><span><i/><i/><i/></span><span>{project.domain}</span><span className="toolbar-lock">↗</span></div><div className="project-capture">{project.image&&!imageFailed?<img src={`./projects/${project.image}.webp`} alt={`${project.name} homepage design`} loading="lazy" width="1440" height="900" onError={()=>setImageFailed(true)}/>:<div className="project-placeholder"><span>{project.type}</span><strong>{project.name}</strong><span>Explore the live website <ArrowUpRight size={18}/></span></div>}</div></div>
      <span className="view-project">View website <ArrowUpRight size={17}/></span>
    </a>
    <div className="project-details"><div><p>{project.type} <span>·</span> {project.location}</p><h3><a href={`https://${project.domain}`} target="_blank" rel="noreferrer">{project.name}</a></h3></div><a className="project-arrow" href={`https://${project.domain}`} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} website (opens in a new tab)`}><ArrowUpRight size={23}/></a></div>
    <p className="project-description">{project.description}</p>
    <div className="project-tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
  </article>;
}
function ContactDialog({onClose}:{onClose:()=>void}){
  const dialog = useRef<HTMLDialogElement>(null);
  const [name,setName]=useState('');const [project,setProject]=useState('');const [website,setWebsite]=useState('');
  useEffect(()=>{const node=dialog.current;if(node&&!node.open)node.showModal();},[]);
  return <dialog ref={dialog} className="brief-dialog" onClose={onClose} onClick={event=>{
    if (event.target !== dialog.current) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
  }} aria-labelledby="brief-title">
    <div className="brief-heading"><span className="eyebrow">LET’S START WITH YOUR IDEA</span><button className="icon-button" onClick={onClose} aria-label="Close project enquiry"><X size={22}/></button></div>
    <h2 id="brief-title">What are you<br/><em>working on?</em></h2>
    <p>A few details are all we need to start a conversation.</p>
    <form onSubmit={event=>{event.preventDefault();const body=`Hi Isiah,\n\nI'm ${name.trim()}.\n\n${project.trim()}\n\nCurrent website: ${website.trim()||'Not yet'}\n\nThanks,\n${name.trim()}`;window.location.href=`mailto:${emailAddress}?subject=${encodeURIComponent(`Website project from ${name.trim()}`)}&body=${encodeURIComponent(body)}`;}}>
      <label>Your name<input required maxLength={100} name="name" autoComplete="name" value={name} onChange={e=>setName(e.target.value)} placeholder="What should I call you?"/></label>
      <label>Current website <span>(optional)</span><input type="url" name="website" autoComplete="url" placeholder="https://yourwebsite.com" value={website} onChange={e=>setWebsite(e.target.value)}/></label>
      <label>Tell me about your project<textarea required maxLength={3000} name="project" rows={4} placeholder="A new website, a redesign, a little help with WordPress…" value={project} onChange={e=>setProject(e.target.value)}/></label>
      <button className="button button-primary" type="submit">Continue in email <ArrowUpRight size={18}/></button>
      <p className="form-note">Opens your email app with your details filled in. Nothing is sent until you send the email.</p>
    </form>
    <a className="dialog-email" href={emailLink}>Or email me directly at {emailAddress}</a>
  </dialog>;
}
export default function App(){
  const [filter,setFilter]=useState('All projects');const [activeService,setActiveService]=useState<number|null>(0);const [brief,setBrief]=useState(false);const [copied,setCopied]=useState(false);const [copyFailed,setCopyFailed]=useState(false);
  const [visibleCount,setVisibleCount] = useState(pageSize);
  const copyTimer=useRef<ReturnType<typeof setTimeout>|null>(null);
  const briefTrigger = useRef<HTMLElement | null>(null);
  const pendingProjectFocus = useRef<string | null>(null);
  useReveals(filter, visibleCount);
  useEffect(() => {
    if (!brief) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [brief]);
  useEffect(() => {
    if (pendingProjectFocus.current) {
      document.getElementById(pendingProjectFocus.current)?.focus({ preventScroll: true });
      pendingProjectFocus.current = null;
    }
  }, [visibleCount]);
  useEffect(()=>()=>{if(copyTimer.current)clearTimeout(copyTimer.current);},[]);
  const filtered=projects.filter(p=>filter==='All projects'||p.type===filter);
  const visibleProjects=filtered.slice(0,visibleCount);
  function chooseFilter(value:string){setFilter(value);setVisibleCount(pageSize);}
  function showMoreProjects(){const nextProject=filtered[visibleCount];if(nextProject)pendingProjectFocus.current=`project-${nextProject.id}`;setVisibleCount(count=>count+pageSize);}
  async function copyEmail(){try{await navigator.clipboard.writeText(emailAddress);setCopied(true);setCopyFailed(false);if(copyTimer.current)clearTimeout(copyTimer.current);copyTimer.current=setTimeout(()=>setCopied(false),2500);}catch{setCopyFailed(true);}}
  function openBrief(){briefTrigger.current=document.activeElement as HTMLElement;setBrief(true);}
  function closeBrief(){
    setBrief(false);
    requestAnimationFrame(() => {
      const trigger=briefTrigger.current;
      if(trigger?.isConnected && trigger.getClientRects().length)trigger.focus();
      else document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus();
    });
  }
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Header onContact={openBrief} />
    <main id="main">
      <section className="hero container" id="intro" aria-labelledby="hero-title">
        <div className="hero-top"><p className="eyebrow">ISIAH DANE GEGUERA <span>—</span> WEB DESIGNER & DEVELOPER</p><span className="availability"><i/> Open to projects & agency work</span></div>
        <div className="hero-grid">
          <div className="hero-copy"><h1 id="hero-title" aria-label="Thoughtful design. Websites that mean business."><span className="headline-line"><span>Thoughtful design.</span></span><span className="headline-line"><span>Websites that</span></span><span className="headline-line"><em>mean business.</em></span></h1></div>
          <div className="hero-aside">
            <div className="experience-stamp"><span>9<span>+</span></span><p>YEARS OF<br/>MAKING IT WORK</p><span className="stamp-spark" aria-hidden="true">✳</span></div>
            <p className="hero-intro">I turn ideas into distinctive WordPress websites.<br className="desktop-break"/> Built with care. Easy to use. Ready for what’s next.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowDown size={18}/></a><button className="button button-text" onClick={openBrief}>Have a project? <ArrowUpRight size={18}/></button></div>
            <div className="hero-person"><img src={portrait} alt="" width="42" height="42"/><div><span>Your designer. Your developer.</span><p>One person who cares about both.</p></div></div>
          </div>
        </div>
        <div className="hero-art" aria-label="A selection of my website projects">
          <div className="art-topline"><span className="art-coordinate">DESIGN ↔ DEVELOPMENT</span><span className="art-footnote">A LITTLE TASTE OF WHAT I DO ↗</span></div>
          <div className="hero-showcase">
            <a className="hero-preview hero-preview-back" href="https://inkedbeautybar.net" target="_blank" rel="noreferrer" aria-label="Visit Inked Beauty Bar website (opens in a new tab)"><div className="art-browser"><span aria-hidden="true">● ● ●</span><span>inkedbeautybar.net</span><ArrowUpRight size={13}/></div><div className="hero-capture"><img src="./projects/inked.webp" alt="Inked Beauty Bar website design" width="1440" height="900" fetchPriority="high"/></div></a>
            <a className="hero-preview hero-preview-front" href="https://www.folisim.com.au" target="_blank" rel="noreferrer" aria-label="Visit Folisim Australia website (opens in a new tab)"><div className="art-browser"><span aria-hidden="true">● ● ●</span><span>folisim.com.au</span><ArrowUpRight size={13}/></div><div className="hero-capture"><img src="./projects/folisim.webp" alt="Folisim Australia website design" width="1440" height="900" fetchPriority="high"/></div><div className="art-project-label"><span>Folisim Australia</span><ArrowUpRight size={15}/></div></a>
          </div>
        </div>
        <div className="hero-bottom"><span>BASED IN THE PHILIPPINES. WORKING EVERYWHERE.</span><a href="#work" className="scroll-cue">SCROLL TO EXPLORE <ArrowDown size={13}/></a></div>
      </section>
      <div className="tools-strip"><div className="container tools-inner"><span className="tool-label">MY EVERYDAY TOOLKIT</span><span>WordPress</span><span>Shopify</span><span>Codex</span><span>Claude</span><span>Elementor</span><span>SEO</span><span>Automation</span><span className="tools-end">Good tools. Better attention to detail.</span></div></div>
      <section className="work-section container section-space" id="work"><div className="section-heading" data-reveal><div><p className="eyebrow"><span className="section-number">01 /</span> SELECTED WORK</p><h2>Different businesses.<br/><span>The same attention to detail.</span></h2></div><p className="section-aside">A selection of websites I’ve worked on.<br/>Made for real businesses, and real people.</p></div>
        <div className="work-toolbar"><div className="work-filters" role="group" aria-label="Filter selected work">{filters.map(f=><button key={f} className={filter===f?'active':''} aria-pressed={filter===f} aria-controls="project-results" onClick={()=>chooseFilter(f)}>{f}<span>{f==='All projects'?projects.length:projects.filter(project=>project.type===f).length}</span></button>)}</div><span className="filter-result" aria-hidden="true">{visibleProjects.length} of {filtered.length} {filtered.length===1?'project':'projects'}</span></div>
        <div className="project-grid" id="project-results">{visibleProjects.map(p=><ProjectCard key={p.id} project={p} index={projects.indexOf(p)}/>)}</div>
        <div className="gallery-footer"><p role="status">Showing {visibleProjects.length} of {filtered.length} {filter==='All projects'?(filtered.length===1?'project':'projects'):`${filter.toLowerCase()} ${filtered.length===1?'project':'projects'}`}</p>{visibleCount<filtered.length?<button className="button button-outline" aria-controls="project-results" onClick={showMoreProjects}>Show more projects <Plus size={17}/></button>:<span className="gallery-complete"><Check size={14}/> All projects in this selection shown</span>}</div>
        <div className="work-note"><p>One more to explore: <a href="https://lucieoliveraesthetics.co.uk" target="_blank" rel="noreferrer">Lucie Oliver Aesthetics <ArrowUpRight size={14}/></a></p><span>YOUR PROJECT COULD BE NEXT.</span></div>
      </section>
      <section className="expertise-section" id="expertise"><div className="container section-space expertise-layout"><div className="section-heading" data-reveal><div><p className="eyebrow"><span className="section-number">02 /</span> WHAT I BRING TO THE TABLE</p><h2>A good-looking website<br/><span>is just the beginning.</span></h2></div><p className="section-aside">Design, build, improve, and keep it running.<br/>I can help with the whole picture.</p></div>
        <div className="service-rows" data-reveal>{services.map((s,i)=><article className={activeService===i?'service-row expanded':'service-row'} key={s.number}><h3><button id={`service-title-${i}`} aria-expanded={activeService===i} aria-controls={`service-detail-${i}`} onClick={()=>setActiveService(activeService===i?null:i)}><span className="service-number">{s.number}</span><s.icon className="service-icon" size={23}/><span className="service-heading"><span className="service-title">{s.title}</span><span className="service-summary">{s.summary}</span></span><span className="service-expand">{activeService===i?<Minus size={19}/>:<Plus size={19}/>}</span></button></h3><div id={`service-detail-${i}`} className="service-disclosure" role="region" aria-labelledby={`service-title-${i}`} aria-hidden={activeService!==i} inert={activeService!==i}><div className="service-detail"><p>{s.text}</p><span className="service-tags">{s.tags}</span></div></div></article>)}</div>
      </div></section>
      <section className="about-section container section-space" id="about"><div className="about-photo" data-reveal><img src={portrait} alt="Isiah Dane Geguera with his dog" width="640" height="720" loading="lazy"/><div className="photo-caption"><span>OFF-SCREEN, THAT’S ME.</span><span>AND MY LITTLE ASSISTANT ↗</span></div><div className="photo-note">A real person.<br/><em>In your corner.</em></div></div><div className="about-copy" data-reveal><p className="eyebrow"><span className="section-number">03 /</span> THE PERSON BEHIND THE WORK</p><h2>Hey, I’m Isiah.<br/><span>I make things<br/>work. And look good.</span></h2><p>I’m a WordPress designer and developer based in the Philippines, with over nine years of experience working with clients in the US, UK, and Australia.</p><p>I’m happiest turning a rough idea into something clear, useful, and thoughtfully built. Whether you’re a business owner who needs a new website or an agency looking for an extra pair of hands, you’ll work directly with me from start to finish.</p><div className="about-values"><span><Check size={15}/> Clear communication</span><span><Check size={15}/> Care in the details</span><span><Check size={15}/> Support beyond launch</span></div><button className="text-link" onClick={openBrief}>Let’s see what we can build <ArrowUpRight size={19}/></button></div></section>
      <section className="process-section container"><div className="process-intro" data-reveal><p className="eyebrow">NO MYSTERY. NO OVERCOMPLICATION.</p><h2>Good work.<br/> A simple process.</h2></div><div className="process-step" data-reveal><span>01</span><h3>We talk.</h3><p>Your goals, your audience, and what you need your website to do.</p></div><div className="process-step" data-reveal><span>02</span><h3>I build.</h3><p>Design and development, with clear updates and room for your feedback.</p></div><div className="process-step" data-reveal><span>03</span><h3>We launch.</h3><p>Final checks, a smooth handover, and a website you’re happy to share.</p></div></section>
      <section className="contact-section" id="contact"><div className="container contact-inner" data-reveal><div className="contact-topline"><p className="eyebrow">GOT SOMETHING IN MIND?</p><span className="availability"><i/> Let’s make room for it.</span></div><h2>Let’s make<br/><em>your next move.</em><span aria-hidden="true">↗</span></h2><div className="contact-bottom"><p>A new website. A better one. A dependable creative partner.<br/>Start with a hello, and we’ll take it from there.</p><button className="button button-dark" onClick={openBrief}>Tell me about your project <ArrowUpRight size={19}/></button></div><div className="direct-contact"><a href={emailLink}>{emailAddress}</a><button onClick={copyEmail} className="copy-email" aria-label={copied?'Email address copied':'Copy email address'}>{copied?<Check size={16}/>:<Copy size={16}/>}<span>{copied?'Copied!':'Copy'}</span></button><span className="copy-status" role="status">{copyFailed?'Please select and copy the email address above.':copied?'Email address copied to clipboard.':''}</span></div></div></section>
    </main>
    <footer className="site-footer"><div className="container footer-inner"><a className="brand" href="#main" aria-label="Back to top">isiah<span className="brand-star" aria-hidden="true">✳</span></a><p>Thoughtfully designed. Carefully built.</p><div className="footer-links"><a href="https://wa.me/639772655441" target="_blank" rel="noreferrer"><MessageCircle size={14}/>WhatsApp <ArrowUpRight size={13}/></a><a href="https://github.com/Isiah-19" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13}/></a><a href="#main">Back to top ↑</a></div><span className="copyright">© {new Date().getFullYear()} Isiah Dane Geguera</span></div></footer>
    {brief?<ContactDialog onClose={closeBrief}/>:null}
  </>;
}
