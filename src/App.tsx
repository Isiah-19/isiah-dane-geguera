import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowDown, Check, Copy, Menu, X, Plus, Minus, MessageCircle, Code2, Layers, Search, Wrench } from 'lucide-react';
import portrait from './assets/isiah-dane-about.jpg';

const emailAddress = 'igeguera@gmail.com';
const emailLink = `mailto:${emailAddress}?subject=Let%E2%80%99s%20talk%20about%20my%20website`;
const projects = [
  {id:'folisim',name:'Folisim Australia',type:'Beauty & aesthetics',location:'Australia',domain:'www.folisim.com.au',image:'folisim',description:'A specialist clinic website with a clear introduction to scalp micropigmentation, treatment information, and consultation enquiries.',tags:['Web design','WordPress'],tone:'sage'},
  {id:'inked',name:'Inked Beauty Bar',type:'Beauty & aesthetics',location:'United States',domain:'inkedbeautybar.net',image:'inked',description:'A distinctive online presence for permanent makeup, treatments, and training, with the brand’s personality at the forefront.',tags:['Web design','Responsive layouts'],tone:'rose'},
  {id:'wolfcrete',name:'Wolfcrete',type:'Local services',location:'United States',domain:'wolfcreteky.com',image:'wolfcrete',description:'A service business website that brings concrete flooring expertise, service information, and quote enquiries together.',tags:['WordPress','Service website'],tone:'sand'},
  {id:'go',name:'GO Destination Services',type:'Corporate',location:'United States',domain:'godestinationservices.com',image:'go',description:'A corporate website introducing relocation and destination services through a clear, professional browsing experience.',tags:['Web design','Corporate website'],tone:'blue'},
];
const filters = ['All projects','Beauty & aesthetics','Local services','Corporate'];
const services = [
  {icon:Layers,title:'Web design & WordPress',number:'01',summary:'From a blank canvas to a website that feels like you.',text:'Thoughtful layouts, clear page structure, and responsive WordPress builds. I work with Elementor, Divi, and Salient, and can build from your brand guide or help shape a new direction.',tags:'ELEMENTOR / DIVI / SALIENT'},
  {icon:Code2,title:'Landing pages & redesigns',number:'02',summary:'A stronger first impression. A clearer next step.',text:'Focused landing pages for a service or campaign, and considered redesigns for websites that need a fresh start. Built around your message, your visitors, and the action you want them to take.',tags:'LANDING PAGES / UI DESIGN / RESPONSIVE BUILDS'},
  {icon:Search,title:'SEO & site improvements',number:'03',summary:'The details that make a website easier to find and use.',text:'Practical on-page SEO, technical improvements, and performance work. From heading structure and metadata to mobile usability, I help make your website clearer for people and search engines.',tags:'ON-PAGE SEO / TECHNICAL SEO / PERFORMANCE'},
  {icon:Wrench,title:'Ongoing website support',number:'04',summary:'A reliable pair of hands after launch, too.',text:'Plugin and theme updates, backups, troubleshooting, and everyday changes. Useful support for business owners and agencies who want someone to take care of the website details.',tags:'MAINTENANCE / TROUBLESHOOTING / AGENCY SUPPORT'},
];
function useReveals() {
  useEffect(()=>{
    const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
    }),{threshold:0.08});
    nodes.forEach(node=>{node.classList.add('will-reveal');observer.observe(node);});
    return ()=>{observer.disconnect();nodes.forEach(node=>node.classList.remove('will-reveal'));};
  },[]);
}
function ProjectCard({project,index}:{project:typeof projects[number];index:number}) {
  return <article className={`project-card ${project.tone}`}>
    <a className="project-visual" href={`https://${project.domain}`} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name} website (opens in a new tab)`}>
      <span className="project-index">SELECTED WORK / 0{index+1}</span>
      <div className="site-preview"><div className="preview-toolbar"><span><i/><i/><i/></span><span>{project.domain}</span><span className="toolbar-lock">↗</span></div><img src={`./projects/${project.image}.webp`} alt={`${project.name} homepage design`} loading="lazy" width="1440" height="900"/></div>
      <span className="view-project">View website <ArrowUpRight size={17}/></span>
    </a>
    <div className="project-details"><div><p>{project.type} <span>·</span> {project.location}</p><h3><a href={`https://${project.domain}`} target="_blank" rel="noreferrer">{project.name}</a></h3></div><a className="project-arrow" href={`https://${project.domain}`} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} website`}><ArrowUpRight size={23}/></a></div>
    <p className="project-description">{project.description}</p>
    <div className="project-tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
  </article>;
}
function ContactDialog({onClose}:{onClose:()=>void}){
  const dialog = useRef<HTMLDialogElement>(null);
  const [name,setName]=useState('');const [project,setProject]=useState('');const [website,setWebsite]=useState('');
  useEffect(()=>{const node=dialog.current;if(node&&!node.open)node.showModal();},[]);
  return <dialog ref={dialog} className="brief-dialog" onClose={onClose} onClick={event=>{if(event.target===dialog.current)onClose();}} aria-labelledby="brief-title">
    <div className="brief-heading"><span className="eyebrow">LET’S START WITH YOUR IDEA</span><button className="icon-button" onClick={onClose} aria-label="Close project enquiry"><X size={22}/></button></div>
    <h2 id="brief-title">What are you<br/><em>working on?</em></h2>
    <p>A few details are all we need to start a conversation.</p>
    <form onSubmit={event=>{event.preventDefault();const body=`Hi Isiah,\n\nI'm ${name.trim()}.\n\n${project.trim()}\n\nCurrent website: ${website.trim()||'Not yet'}\n\nThanks,\n${name.trim()}`;window.location.href=`mailto:${emailAddress}?subject=${encodeURIComponent(`Website project from ${name.trim()}`)}&body=${encodeURIComponent(body)}`;}}>
      <label>Your name<input required maxLength={100} name="name" autoComplete="name" value={name} onChange={e=>setName(e.target.value)} placeholder="What should I call you?"/></label>
      <label>Current website <span>(optional)</span><input type="url" name="website" autoComplete="url" placeholder="https://yourwebsite.com" value={website} onChange={e=>setWebsite(e.target.value)}/></label>
      <label>Tell me about your project<textarea required maxLength={3000} name="project" rows={4} placeholder="A new website, a redesign, a little help with WordPress…" value={project} onChange={e=>setProject(e.target.value)}/></label>
      <button className="button button-mint" type="submit">Continue in email <ArrowUpRight size={18}/></button>
      <p className="form-note">Opens your email app with your details filled in. Nothing is sent until you send the email.</p>
    </form>
    <a className="dialog-email" href={emailLink}>Or email me directly at {emailAddress}</a>
  </dialog>;
}
export default function App(){
  const [menu,setMenu]=useState(false);const [filter,setFilter]=useState('All projects');const [activeService,setActiveService]=useState<number|null>(0);const [brief,setBrief]=useState(false);const [copied,setCopied]=useState(false);const [copyFailed,setCopyFailed]=useState(false);
  const copyTimer=useRef<ReturnType<typeof setTimeout>|null>(null);
  useReveals();
  useEffect(()=>()=>{if(copyTimer.current)clearTimeout(copyTimer.current);},[]);
  const filtered=projects.filter(p=>filter==='All projects'||p.type===filter);
  async function copyEmail(){try{await navigator.clipboard.writeText(emailAddress);setCopied(true);setCopyFailed(false);if(copyTimer.current)clearTimeout(copyTimer.current);copyTimer.current=setTimeout(()=>setCopied(false),2500);}catch{setCopyFailed(true);}}
  function openBrief(){setMenu(false);setBrief(true);}
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="container nav-inner"><a className="brand" href="#main" aria-label="Isiah Dane Geguera home">isiah<span className="brand-star" aria-hidden="true">✳</span></a>
      <button className="menu-toggle" aria-label={menu?'Close navigation':'Open navigation'} aria-expanded={menu} aria-controls="main-navigation" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
      <nav id="main-navigation" className={menu?'main-nav is-open':'main-nav'} aria-label="Main navigation"><a href="#work" onClick={()=>setMenu(false)}>Work<span>04</span></a><a href="#expertise" onClick={()=>setMenu(false)}>What I do</a><a href="#about" onClick={()=>setMenu(false)}>About</a><button className="nav-contact" onClick={openBrief}>Let’s talk <ArrowUpRight size={17}/></button></nav></div></header>
    <main id="main">
      <section className="hero container" aria-labelledby="hero-title"><div className="hero-top"><p className="eyebrow">ISIAH DANE GEGUERA <span>—</span> WEB DESIGNER & DEVELOPER</p><span className="availability"><i/> Open to projects & agency work</span></div>
        <div className="hero-grid"><div className="hero-copy"><h1 id="hero-title">Thoughtful design.<br/>Websites that<br/><em>mean business.</em></h1><p className="hero-intro">I turn ideas into distinctive WordPress websites.<br className="desktop-break"/> Built with care. Easy to use. Ready for what’s next.</p><div className="hero-actions"><a className="button button-mint" href="#work">Explore my work <ArrowDown size={18}/></a><button className="button button-text" onClick={openBrief}>Have a project? <ArrowUpRight size={18}/></button></div><div className="hero-person"><img src={portrait} alt="" width="42" height="42"/><div><span>Your designer. Your developer.</span><p>One person who cares about both.</p></div></div></div>
        <div className="hero-art" aria-label="A selection of my website projects"><div className="art-cross cross-one" aria-hidden="true">+</div><div className="art-cross cross-two" aria-hidden="true">+</div><div className="art-coordinate" aria-hidden="true">DESIGN ↔ DEVELOPMENT</div>
          <a className="hero-preview hero-preview-back" href="https://inkedbeautybar.net" target="_blank" rel="noreferrer" aria-label="Visit Inked Beauty Bar website"><div className="art-browser"><span>● ● ●</span><span>inkedbeautybar.net</span><ArrowUpRight size={11}/></div><img src="./projects/inked.webp" alt="Inked Beauty Bar website design" width="1440" height="900" fetchPriority="high"/></a>
          <a className="hero-preview hero-preview-front" href="https://www.folisim.com.au" target="_blank" rel="noreferrer" aria-label="Visit Folisim Australia website"><div className="art-browser"><span>● ● ●</span><span>folisim.com.au</span><ArrowUpRight size={11}/></div><img src="./projects/folisim.webp" alt="Folisim Australia website design" width="1440" height="900" fetchPriority="high"/><div className="art-project-label"><span>Folisim Australia</span><ArrowUpRight size={15}/></div></a>
          <div className="experience-stamp"><span>9<span>+</span></span><p>YEARS OF<br/>MAKING IT WORK</p><span className="stamp-spark" aria-hidden="true">✳</span></div><span className="art-footnote">A LITTLE TASTE OF WHAT I DO ↗</span>
        </div></div>
        <div className="hero-bottom"><span>BASED IN THE PHILIPPINES. WORKING EVERYWHERE.</span><span className="scroll-cue">SCROLL TO EXPLORE <ArrowDown size={13}/></span></div>
      </section>
      <div className="tools-strip"><div className="container tools-inner"><span className="tool-label">MY EVERYDAY TOOLKIT</span><span>WordPress</span><span>Elementor</span><span>Divi</span><span>Salient</span><span>SEO</span><span className="tools-end">Good tools. Better attention to detail.</span></div></div>
      <section className="work-section container section-space" id="work"><div className="section-heading" data-reveal><div><p className="eyebrow"><span className="section-number">01 /</span> SELECTED WORK</p><h2>Different businesses.<br/><span>The same attention to detail.</span></h2></div><p className="section-aside">A selection of websites I’ve worked on.<br/>Made for real businesses, and real people.</p></div>
        <div className="work-toolbar"><div className="work-filters" aria-label="Filter selected work">{filters.map(f=><button key={f} className={filter===f?'active':''} aria-pressed={filter===f} onClick={()=>setFilter(f)}>{f}{f==='All projects'?<span>04</span>:null}</button>)}</div><span className="filter-result" role="status">{filtered.length} {filtered.length===1?'project':'projects'}</span></div>
        <div className="project-grid">{filtered.map(p=><ProjectCard key={p.id} project={p} index={projects.indexOf(p)}/>)}</div>
        <div className="work-note"><p>One more to explore: <a href="https://lucieoliveraesthetics.co.uk" target="_blank" rel="noreferrer">Lucie Oliver Aesthetics <ArrowUpRight size={14}/></a></p><span>YOUR PROJECT COULD BE NEXT.</span></div>
      </section>
      <section className="expertise-section" id="expertise"><div className="container section-space"><div className="section-heading" data-reveal><div><p className="eyebrow"><span className="section-number">02 /</span> WHAT I BRING TO THE TABLE</p><h2>A good-looking website<br/><span>is just the beginning.</span></h2></div><p className="section-aside">Design, build, improve, and keep it running.<br/>I can help with the whole picture.</p></div>
        <div className="service-rows">{services.map((s,i)=><article className={activeService===i?'service-row expanded':'service-row'} key={s.number}><h3><button aria-expanded={activeService===i} aria-controls={`service-detail-${i}`} onClick={()=>setActiveService(activeService===i?null:i)}><span className="service-number">{s.number}</span><s.icon className="service-icon" size={23}/><span className="service-title">{s.title}</span><span className="service-summary">{s.summary}</span><span className="service-expand">{activeService===i?<Minus size={19}/>:<Plus size={19}/>}</span></button></h3><div id={`service-detail-${i}`} className="service-detail" hidden={activeService!==i}><p>{s.text}</p><span className="service-tags">{s.tags}</span></div></article>)}</div>
      </div></section>
      <section className="about-section container section-space" id="about"><div className="about-photo" data-reveal><img src={portrait} alt="Isiah Dane Geguera with his dog" width="640" height="720" loading="lazy"/><div className="photo-caption"><span>OFF-SCREEN, THAT’S ME.</span><span>AND MY LITTLE ASSISTANT ↗</span></div><div className="photo-note">A real person.<br/><em>In your corner.</em></div></div><div className="about-copy" data-reveal><p className="eyebrow"><span className="section-number">03 /</span> THE PERSON BEHIND THE WORK</p><h2>Hey, I’m Isiah.<br/><span>I make things<br/>work. And look good.</span></h2><p>I’m a WordPress designer and developer based in the Philippines, with over nine years of experience working with clients in the US, UK, and Australia.</p><p>I’m happiest turning a rough idea into something clear, useful, and thoughtfully built. Whether you’re a business owner who needs a new website or an agency looking for an extra pair of hands, you’ll work directly with me from start to finish.</p><div className="about-values"><span><Check size={15}/> Clear communication</span><span><Check size={15}/> Care in the details</span><span><Check size={15}/> Support beyond launch</span></div><button className="text-link" onClick={openBrief}>Let’s see what we can build <ArrowUpRight size={19}/></button></div></section>
      <section className="process-section container"><div className="process-intro"><p className="eyebrow">NO MYSTERY. NO OVERCOMPLICATION.</p><h2>Good work.<br/>A simple process.</h2></div><div className="process-step"><span>01</span><h3>We talk.</h3><p>Your goals, your audience, and what you need your website to do.</p></div><div className="process-step"><span>02</span><h3>I build.</h3><p>Design and development, with clear updates and room for your feedback.</p></div><div className="process-step"><span>03</span><h3>We launch.</h3><p>Final checks, a smooth handover, and a website you’re happy to share.</p></div></section>
      <section className="contact-section" id="contact"><div className="container contact-inner" data-reveal><div className="contact-topline"><p className="eyebrow">GOT SOMETHING IN MIND?</p><span className="availability"><i/> Let’s make room for it.</span></div><h2>Let’s make<br/><em>your next move.</em><span aria-hidden="true">↗</span></h2><div className="contact-bottom"><p>A new website. A better one. A dependable creative partner.<br/>Start with a hello, and we’ll take it from there.</p><button className="button button-dark" onClick={openBrief}>Tell me about your project <ArrowUpRight size={19}/></button></div><div className="direct-contact"><a href={emailLink}>{emailAddress}</a><button onClick={copyEmail} className="copy-email" aria-label={copied?'Email address copied':'Copy email address'}>{copied?<Check size={16}/>:<Copy size={16}/>}<span>{copied?'Copied!':'Copy'}</span></button><span className="copy-status" role="status">{copyFailed?'Please select and copy the email address above.':copied?'Email address copied to clipboard.':''}</span></div></div></section>
    </main>
    <footer className="site-footer"><div className="container footer-inner"><a className="brand" href="#main" aria-label="Back to top">isiah<span className="brand-star" aria-hidden="true">✳</span></a><p>Thoughtfully designed. Carefully built.</p><div className="footer-links"><a href="https://wa.me/639772655441" target="_blank" rel="noreferrer"><MessageCircle size={14}/>WhatsApp <ArrowUpRight size={13}/></a><a href="https://github.com/Isiah-19" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13}/></a><a href="#main">Back to top ↑</a></div><span className="copyright">© {new Date().getFullYear()} Isiah Dane Geguera</span></div></footer>
    {brief?<ContactDialog onClose={()=>setBrief(false)}/>:null}
  </>;
}
