import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail,
  Menu, X, Download, MoveUpRight, Code2, Cpu, BrainCircuit, Globe2,
  GraduationCap, Trophy, ExternalLink, Sparkles, ChevronRight
} from 'lucide-react';
import './style.css';

const PROFILE = {
  name: 'Eswar Sai Teja',
  headline: 'AI/ML Engineer & Software Developer',
  email: 'eswarg1602@gmail.com',
  github: 'https://github.com/eswar1602-web',
  linkedin: 'https://www.linkedin.com/in/eswar-sai-teja-gundumogula-b95804356',
  university: 'Manav Rachna University',
  degree: 'B.Tech · Computer Science & Engineering (AI & ML)',
  period: 'Aug 2024 — Present',
};

const projects = [
  {
    number: '01', name: 'GraphSentinel', category: 'AI / CYBERSECURITY',
    description: 'A graph-based network threat detection project exploring how device relationships and communication patterns can help identify suspicious activity.',
    stack: ['Python', 'PyTorch Geometric', 'GraphSAGE', 'Network Security'],
    accent: 'coral', visual: 'graph',
    href: '', status: 'Project details coming soon'
  },
  {
    number: '02', name: 'Seekora', category: 'NLP / SEMANTIC SEARCH',
    description: 'An intelligent document discovery system that extracts content, creates semantic embeddings, and helps users retrieve relevant information from their files.',
    stack: ['Python', 'FastAPI', 'Sentence Transformers', 'PyMuPDF', 'Tesseract OCR'],
    accent: 'blue', visual: 'seekora',
    href: 'https://github.com/diveshreddy-ece/Seekora', status: 'Source repository'
  },
  {
    number: '03', name: 'Building Damage Classifier', category: 'DEEP LEARNING / COMPUTER VISION',
    description: 'A deep learning image-classification model using PyTorch and ResNet to classify building damage severity and support post-disaster assessment.',
    stack: ['Python', 'PyTorch', 'ResNet', 'Image Classification'],
    accent: 'yellow', visual: 'building',
    href: '', status: 'Project details coming soon'
  },
  {
    number: '04', name: 'Customer Segmentation & LTV', category: 'MACHINE LEARNING / ANALYTICS',
    description: 'A machine learning workflow that studies customer purchasing behavior, identifies valuable customer segments, and predicts Lifetime Value.',
    stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
    accent: 'green', visual: 'customers',
    href: '', status: 'Project details coming soon'
  },
];

const skills = [
  { title: 'Programming', items: ['Python', 'Java', 'C'], icon: Code2 },
  { title: 'AI & Machine Learning', items: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Artificial Neural Networks', 'Data Analytics'], icon: BrainCircuit },
  { title: 'Libraries & Frameworks', items: ['NumPy', 'Pandas', 'Scikit-learn', 'PyTorch', 'TensorFlow / Keras', 'OpenCV'], icon: Cpu },
  { title: 'Core CS & Tools', items: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Git', 'GitHub', 'VS Code'], icon: Globe2 },
];

function ProjectVisual({ type }) {
  if (type === 'graph') return <div className="visual visual-graph" aria-hidden="true"><div className="graph-grid"/><svg viewBox="0 0 440 230"><g className="edges"><path d="M75 135 L155 55 L235 105 L335 45 M155 55 L180 180 L280 185 L335 45 M75 135 L180 180 L235 105 L385 150 M235 105 L280 185"/><path d="M75 135 L235 105 L335 45"/></g>{[[75,135],[155,55],[235,105],[335,45],[180,180],[280,185],[385,150]].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r={i===2?13:8} className={i===2?'node-hot':'node'}/><circle cx={x} cy={y} r="18" className="node-halo"/></g>)}</svg><span className="visual-tag">NETWORK GRAPH / LIVE SIGNALS</span><span className="visual-index">GS—01</span></div>;
  if (type === 'seekora') return <div className="visual visual-seekora" aria-hidden="true"><div className="search-window"><div className="window-top"><i/><i/><i/><span>SEEKORA / KNOWLEDGE SEARCH</span></div><div className="search-field"><span>⌕</span> Find information across your documents <b>↵</b></div><div className="result-label">SEMANTIC MATCHES <span>03 RESULTS</span></div>{['Project architecture overview.pdf','Research notes — neural networks.docx','Dataset documentation.pdf'].map((x,i)=><div className="search-result" key={x}><span className="file-icon">{i===1?'W':'P'}</span><div><b>{x}</b><small>{['Relevant passage · page 04','Relevant passage · section 2.1','Relevant passage · page 11'][i]}</small></div><span className="match">{['98','94','89'][i]}%</span></div>)}</div><span className="visual-tag">DOCUMENT INTELLIGENCE / RETRIEVAL</span><span className="visual-index">SK—02</span></div>;
  if (type === 'building') return <div className="visual visual-building" aria-hidden="true"><div className="building-scene"><div className="skyline"><div className="tower t1"/><div className="tower t2"/><div className="tower t3"/><div className="tower t4"/></div><div className="scan-corners"><i/><i/><i/><i/></div><div className="scan-label">CLASSIFICATION OUTPUT <b>DAMAGE: MODERATE</b></div></div><span className="visual-tag">COMPUTER VISION / RESNET</span><span className="visual-index">BD—03</span></div>;
  return <div className="visual visual-customers" aria-hidden="true"><div className="chart-card"><div className="chart-head"><span>CUSTOMER VALUE MAP</span><b>RFM / LTV</b></div><div className="chart-area"><div className="axis-y"><span>HIGH</span><span>VALUE</span><span>LOW</span></div><div className="scatter">{Array.from({length:48},(_,i)=><i key={i} className={`dot dot-${i%4}`} style={{left:`${8+(i*37%86)}%`,top:`${8+(i*23%78)}%`}}/>)}</div></div><div className="chart-legend"><span><i className="legend-a"/> High value</span><span><i className="legend-b"/> Growth</span><span><i className="legend-c"/> At risk</span></div></div><span className="visual-tag">CUSTOMER ANALYTICS / SEGMENTATION</span><span className="visual-index">CL—04</span></div>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [['About','#about'],['Skills','#skills'],['Projects','#projects'],['Experience','#experience'],['Contact','#contact']];
  return <header className="nav-wrap"><nav className="navbar container"><a className="brand" href="#home" aria-label="Eswar Sai Teja home">EST<span>✳</span></a><div className={`nav-links ${open?'nav-open':''}`}>{links.map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}<a className="nav-resume" href="/Eswar-Resume.docx" download>Resume <Download size={14}/></a></div><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button></nav></header>;
}

function Hero() {
  return <section className="hero container" id="home">
    <div className="hero-copy">
      <div className="eyebrow"><span className="status-dot"/> THIRD-YEAR B.TECH STUDENT <span className="eyebrow-line"/></div>
      <h1>Curious mind.<br/><em>Builder</em> by nature<span className="period">.</span></h1>
      <p className="hero-role">I’m <strong>Eswar Sai Teja</strong> — a Computer Science student specialising in Artificial Intelligence & Machine Learning, exploring the space where intelligent systems meet useful software.</p>
      <div className="hero-actions"><a className="button button-dark" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="text-link" href="#contact">Let’s connect <ArrowDownRight size={16}/></a></div>
      <div className="hero-meta"><span>BASED IN INDIA</span><span>OPEN TO INTERNSHIP OPPORTUNITIES</span></div>
    </div>
    <div className="hero-portrait-wrap"><div className="portrait-sticker">LEARN<br/>MAKE<br/>REPEAT<span>↘</span></div><div className="portrait-frame"><img src="/images/eswar-profile.jpg" alt="Portrait of Eswar Sai Teja"/><div className="portrait-overlay">ESWAR SAI TEJA <span>— 2026</span></div></div><div className="portrait-caption">A LITTLE ABOUT THE PERSON<br/><span>BEHIND THE PROJECTS ↗</span></div></div>
    <div className="hero-bottom-mark">EST <span>PORTFOLIO / 2026</span></div>
  </section>;
}

function Marquee() { return <div className="marquee" aria-label="AI, software, curiosity, building"><div className="marquee-track">{Array.from({length:2},(_,i)=><div className="marquee-set" key={i}><span>ARTIFICIAL INTELLIGENCE</span><b>✳</b><span>SOFTWARE DEVELOPMENT</span><b>✳</b><span>ALWAYS LEARNING</span><b>✳</b><span>TURNING IDEAS INTO CODE</span><b>✳</b></div>)}</div></div>; }

function SectionHeading({ kicker, title, number }) { return <div className="section-heading"><div><div className="eyebrow">{kicker}</div><h2>{title}</h2></div><span className="section-number">{number} / 04</span></div>; }

function About() { return <section className="section container about-section" id="about"><SectionHeading kicker="A QUICK INTRODUCTION" title={<>A little context<span className="period">.</span></>} number="01"/><div className="about-grid"><div className="about-big">I like understanding how things work — then finding ways to make them <span>work better.</span></div><div className="about-copy"><p>I’m a third-year B.Tech student at Manav Rachna University, studying Computer Science & Engineering with a specialisation in AI & ML.</p><p>My interests span machine learning, deep learning, computer vision, and software development. I enjoy learning by building, experimenting with ideas, and turning technical concepts into practical projects.</p><a href="#contact" className="underlined-link">Have a project in mind? Let’s talk <ArrowUpRight size={15}/></a></div></div><div className="about-facts"><div><span>01 / EDUCATION</span><b>Manav Rachna University</b><small>B.Tech · CSE (AI & ML)</small></div><div><span>02 / FOCUS</span><b>AI + Software</b><small>Learning through hands-on work</small></div><div><span>03 / APPROACH</span><b>Curiosity first</b><small>Build · Test · Improve</small></div></div></section>; }

function Skills() { return <section className="section skills-section" id="skills"><div className="container"><SectionHeading kicker="TOOLS I WORK WITH" title={<>The toolkit<span className="period">.</span></>} number="02"/><div className="skills-grid">{skills.map(({title,items,icon:Icon},i)=><div className="skill-card" key={title}><div className="skill-top"><span>0{i+1}</span><Icon size={22} strokeWidth={1.5}/></div><h3>{title}</h3><div className="skill-tags">{items.map(x=><span key={x}>{x}</span>)}</div></div>)}</div><p className="skills-note"><Sparkles size={15}/> Skills reflect the technologies and topics listed in my current resume.</p></div></section>; }

function Projects() { return <section className="section container projects-section" id="projects"><SectionHeading kicker="SELECTED WORK / 2026" title={<>Things I’ve built<span className="period">.</span></>} number="03"/><p className="projects-intro">A selection of four projects across AI, cybersecurity, language technology, computer vision, and analytics. Each one represents a different problem space I’ve been exploring.</p><div className="projects-list">{projects.map(p=><article className={`project-card ${p.accent}`} key={p.number}><div className="project-card-head"><span className="project-number">{p.number} <i>—</i> SELECTED PROJECT</span><span className="project-category">{p.category}</span></div><ProjectVisual type={p.visual}/><div className="project-info"><div><h3>{p.name}</h3><p>{p.description}</p><div className="project-stack">{p.stack.map(t=><span key={t}>{t}</span>)}</div></div><div className="project-link-wrap">{p.href?<a className="project-link" href={p.href} target="_blank" rel="noreferrer" aria-label={`Open ${p.name} source repository`}><ArrowUpRight/></a>:<span className="project-upcoming" title={p.status}><ArrowUpRight/></span>}<small>{p.href?'VIEW REPOSITORY':'DETAILS SOON'}</small></div></div></article>)}</div></section>; }

function Experience() { return <section className="section experience-section" id="experience"><div className="container"><SectionHeading kicker="WHERE I’VE BEEN LEARNING" title={<>The journey so far<span className="period">.</span></>} number="04"/><div className="timeline"><div className="timeline-item"><div className="timeline-date">JUN 2026 — JUL 2026</div><div className="timeline-main"><span className="timeline-type">INTERNSHIP / VIRTUAL PROGRAM</span><h3>Data Science Virtual Internship</h3><p>Decode Labs</p><span className="timeline-detail">A virtual internship programme in the data science domain.</span></div><div className="timeline-mark"><ArrowUpRight/></div></div><div className="timeline-item"><div className="timeline-date">AUG 2024 — PRESENT</div><div className="timeline-main"><span className="timeline-type">EDUCATION</span><h3>Manav Rachna University</h3><p>B.Tech · Computer Science & Engineering (AI & ML)</p><span className="timeline-detail">Faridabad, Haryana, India</span></div><div className="timeline-mark"><GraduationCap/></div></div><div className="timeline-item"><div className="timeline-date">JUL 2022 — MAY 2024</div><div className="timeline-main"><span className="timeline-type">SENIOR SECONDARY</span><h3>Tirumala Junior College</h3><p>Class XII · 95.8%</p><span className="timeline-detail">Bhimavaram, Andhra Pradesh</span></div><div className="timeline-mark"><Trophy/></div></div></div><div className="recognition"><div className="recognition-title"><Trophy size={20}/><span>RECOGNITION & PARTICIPATION</span></div><div className="recognition-item"><b>1st Place — Arduino Fest</b><span>Developed and presented an Arduino-based technical project.</span></div><div className="recognition-item"><b>Terra Hack — Manav Rachna University</b><span>Collaborated with a team to develop and present a technical solution.</span></div><div className="recognition-item"><b>Smart India Hackathon (SIH)</b><span>Collaborated on a problem statement and contributed to a technology-based solution.</span></div></div></div></section>; }

function Contact() { return <section className="contact-section" id="contact"><div className="container contact-inner"><div className="eyebrow"><span className="status-dot"/> LET’S MAKE SOMETHING USEFUL</div><h2>Have an idea?<br/><em>Let’s talk</em><span className="period">.</span></h2><a className="contact-email" href={`mailto:${PROFILE.email}`}>{PROFILE.email}<ArrowUpRight/></a><div className="contact-bottom"><div className="contact-socials"><a href={PROFILE.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={14}/></a><a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={14}/></a><a href={`mailto:${PROFILE.email}`}><Mail size={17}/> Email <ArrowUpRight size={14}/></a></div><a className="back-top" href="#home">BACK TO TOP ↑</a></div></div></section>; }

function Footer() { return <footer className="footer"><div className="container"><a className="brand" href="#home">EST<span>✳</span></a><span>DESIGNED & BUILT BY ESWAR SAI TEJA</span><span>© 2026 · ALL RIGHTS RESERVED</span></div></footer>; }

function App() {
  useEffect(()=>{
    if (!('IntersectionObserver' in window)) { document.querySelectorAll('.section,.contact-section').forEach(el=>el.classList.add('is-visible')); return; }
    const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');obs.unobserve(e.target)}}),{threshold:.12});
    document.querySelectorAll('.section,.contact-section').forEach(el=>obs.observe(el));
    return()=>obs.disconnect();
  },[]);
  return <><Navbar/><main><Hero/><Marquee/><About/><Skills/><Projects/><Experience/><Contact/></main><Footer/> </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
