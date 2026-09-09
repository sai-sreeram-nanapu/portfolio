"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Blocks,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  CircleDot,
  Cloud,
  Code2,
  Database,
  FlaskConical,
  GitBranch,
  GraduationCap,
  Home,
  Layers3,
  Network,
  ListChecks,
  Mail,
  MapPin,
  PenLine,
  Sparkles,
  Workflow
} from "lucide-react";
import { articles } from "@/data/blog";
import { additionalLearning, education, sapLearning } from "@/data/education";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";

const navigation = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Projects", href: "#projects", icon: Layers3 },
  { label: "Experience", href: "#experience", icon: BriefcaseBusiness },
  { label: "Expertise", href: "#skills", icon: Sparkles },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Writing", href: "#writing", icon: PenLine },
  { label: "Contact", href: "#contact", icon: Mail }
];

const capabilities = [
  { title: "Full-stack", detail: "React, TypeScript & Node.js", icon: Code2 },
  { title: "Data & AI", detail: "Python, ML & LLM workflows", icon: BrainCircuit },
  { title: "Cloud systems", detail: "AWS, Azure & DevOps", icon: Cloud },
  { title: "Enterprise", detail: "SAP BTP, UI5 & OData", icon: Blocks }
];

const balancedSkills = [skillCategories[1], skillCategories[3], skillCategories[2], skillCategories[0]];
const balancedProjects = [projects[1], projects[3], projects[0], projects[2]];

function ProjectVisual({ type }: { type: (typeof balancedProjects)[number]["icon"] }) {
  if (type === "workflow") {
    return (
      <div className="project-visual workflow-visual" aria-label="Email-to-timeline workflow diagram">
        <div className="visual-toolbar"><span /><span /><span /><b>workflow.pipeline</b></div>
        <div className="flow-row">
          <div className="flow-node"><Mail size={19} /><span>Gmail API</span><small>OAuth 2.0</small></div>
          <ArrowRight size={18} className="flow-arrow" />
          <div className="flow-node active"><BrainCircuit size={19} /><span>LLM parser</span><small>Structured data</small></div>
          <ArrowRight size={18} className="flow-arrow" />
          <div className="flow-node"><ListChecks size={19} /><span>Timeline</span><small>Status tracking</small></div>
        </div>
        <div className="visual-status"><Check size={14} /> Latest application signal parsed successfully</div>
      </div>
    );
  }

  if (type === "prediction") {
    return (
      <div className="project-visual prediction-visual" aria-label="Burnout risk analytics interface">
        <div className="visual-toolbar"><span /><span /><span /><b>risk.analytics</b></div>
        <div className="metric-row">
          <div><small>Model inputs</small><strong>12</strong></div>
          <div><small>Access</small><strong>RBAC</strong></div>
          <div><small>Cache</small><strong>Redis</strong></div>
        </div>
        <div className="chart-bars" aria-hidden="true">
          {[32, 48, 41, 64, 53, 78, 69, 86, 74, 92].map((height, index) => (
            <span key={index} style={{ height: `${height}%` }} />
          ))}
        </div>
        <div className="model-tags"><span>Random Forest</span><span>BERT</span><span>LSTM</span></div>
      </div>
    );
  }

  if (type === "sap") {
    return (
      <div className="project-visual sap-visual" aria-label="Northwind data explorer interface">
        <div className="visual-toolbar"><span /><span /><span /><b>northwind.explorer</b></div>
        <div className="sap-layout">
          <div className="sap-nav"><strong>NW</strong><span className="is-active">Home</span><span>Products</span><span>Orders</span><span>Analytics</span></div>
          <div className="sap-content">
            <div className="metric-row">
              <div><small>Datasets</small><strong>26</strong></div>
              <div><small>Protocol</small><strong>OData V2</strong></div>
              <div><small>Views</small><strong>Responsive</strong></div>
            </div>
            <div className="line-chart"><svg viewBox="0 0 420 100" role="img" aria-label="Illustrative application usage trend"><path d="M4 85 L54 60 L104 70 L154 37 L204 58 L254 26 L304 47 L354 18 L416 31" /></svg></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual bio-visual" aria-label="Protein sequence classification pipeline">
      <div className="visual-toolbar"><span /><span /><span /><b>sequence.classifier</b></div>
      <div className="sequence-strip">M A D E K L P R V T A C G T R S N V Q L</div>
      <div className="bio-flow">
        <span><Database size={16} />NCBI data</span><ArrowRight size={15} /><span><FlaskConical size={16} />K-mer features</span><ArrowRight size={15} /><span><BarChart3 size={16} />Model comparison</span>
      </div>
      <div className="model-tags"><span>Logistic regression</span><span>SVM</span><span>Naive Bayes</span><span>K-means</span></div>
    </div>
  );
}

export function PortfolioWorkspace() {
  const [activeProject, setActiveProject] = useState(0);
  const project = balancedProjects[activeProject];
  const ProjectIcon = { workflow: Workflow, prediction: BarChart3, sap: Blocks, bio: FlaskConical }[project.icon];

  return (
    <div className="portfolio-shell">
      <aside className="profile-sidebar">
        <div className="sidebar-inner">
          <a className="monogram" href="#home" aria-label="Sai Sreeram Nanapu home"><span>SSN</span><i /></a>

          <div className="portrait-frame">
            <Image src="/sai-sreeram-portrait.png" alt="Sai Sreeram Nanapu" fill priority sizes="(max-width: 860px) 92px, 206px" className="portrait-image" />
          </div>

          <div className="identity-block">
            <strong>Sai Sreeram Nanapu</strong>
            <span>Software Engineer · Data Scientist</span>
            <p><MapPin size={14} /> New Jersey, USA</p>
            <p className="availability"><i /> Open to opportunities</p>
          </div>

          <nav className="sidebar-nav" aria-label="Portfolio navigation">
            {navigation.map((item, index) => {
              const Icon = item.icon;
              return <a key={item.href} href={item.href} className={index === 0 ? "active" : undefined}><Icon size={17} aria-hidden="true" /><span>{item.label}</span></a>;
            })}
          </nav>

          <div className="sidebar-socials">
            <a href="https://www.linkedin.com/in/sai-sreeram-nanapu-100aaa284" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Network size={17} /></a>
            <a href="https://github.com/sai-sreeram-nanapu" target="_blank" rel="noreferrer" aria-label="GitHub"><GitBranch size={17} /></a>
            <a href="mailto:nanapusaisreeram2002@gmail.com" aria-label="Email"><Mail size={17} /></a>
          </div>
          <p className="sidebar-quote">“From raw requirements to reliable, useful software.”</p>
        </div>
      </aside>

      <main className="portfolio-main">
        <section id="home" className="hero-section">
          <div className="topbar">
            <p>Full-stack engineering <span>/</span> Data & AI <span>/</span> Cloud & enterprise</p>
            <div><span className="top-availability"><i /> Available for opportunities</span><a className="primary-action" href="mailto:nanapusaisreeram2002@gmail.com">Let&apos;s connect <ArrowRight size={16} /></a></div>
          </div>

          <div className="hero-grid">
            <div>
              <p className="section-kicker">Software engineer · data scientist · product-minded builder</p>
              <h1>Sai Sreeram Nanapu</h1>
              <p className="hero-summary">I build full-stack and data-driven applications across modern web, AI/ML, cloud, and enterprise platforms—turning complex requirements into clear, scalable products.</p>
              <div className="hero-actions">
                <a className="text-action" href="#projects">Explore my work <ArrowRight size={15} /></a>
                <a className="text-action muted" href="/Sai-Sreeram-Nanapu-Resume.pdf" download>Download résumé <ArrowDownToLine size={15} /></a>
              </div>
            </div>
            <aside className="hero-statement"><p>Engineering useful systems from interface to intelligence.</p><span /><small>PRODUCTS<br />DATA<br />PLATFORMS</small></aside>
          </div>

          <div className="capability-strip">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return <div key={capability.title} className="capability-item"><Icon size={27} aria-hidden="true" /><p><strong>{capability.title}</strong><span>{capability.detail}</span></p></div>;
            })}
          </div>
        </section>

        <div className="primary-work-grid">
          <section id="experience" className="content-panel experience-panel">
            <div className="panel-heading"><h2>Experience Ledger</h2><span /><a href="#education">Education <ArrowRight size={15} /></a></div>
            <div className="timeline">
              {experience.map((item) => (
                <article key={`${item.company}-${item.role}`} className="timeline-item">
                  <i className={item.current ? "current" : undefined} />
                  <div className="timeline-title"><div><h3>{item.role}</h3><strong>{item.company}</strong></div><time>{item.duration.replace(" - ", " – ")}</time></div>
                  <p>{item.highlights[0]}</p>
                  <span><MapPin size={13} /> {item.location}</span>
                </article>
              ))}
            </div>
            <div className="experience-note"><CircleDot size={16} /><p><strong>What I bring</strong><span>Product thinking, analytical problem-solving, implementation, testing, and iterative delivery.</span></p></div>
          </section>

          <section id="projects" className="content-panel projects-panel">
            <div className="panel-heading"><h2>Selected Work</h2><span /><a href="https://github.com/sai-sreeram-nanapu" target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={15} /></a></div>
            <div className="project-tabs" role="tablist" aria-label="Selected projects">
              {balancedProjects.map((item, index) => (
                <button key={item.title} type="button" role="tab" aria-selected={activeProject === index} className={activeProject === index ? "active" : undefined} onClick={() => setActiveProject(index)}><span>0{index + 1}</span>{item.title}</button>
              ))}
            </div>

            <article className="project-dossier" role="tabpanel">
              <div className="project-copy">
                <div className="project-label"><ProjectIcon size={16} /> Featured project</div>
                <h3>{project.title}</h3><p>{project.description}</p>
                <ul>{project.highlights.slice(0, 3).map((highlight) => <li key={highlight}><Check size={13} />{highlight}</li>)}</ul>
                <div className="project-tech">{project.tech.slice(0, 6).map((tech) => <span key={tech}>{tech}</span>)}</div>
                <div className="project-actions">{project.actions.map((action) => <a key={action.label} href={action.href} target="_blank" rel="noreferrer">{action.label}<ArrowUpRight size={14} /></a>)}</div>
              </div>
              <ProjectVisual type={project.icon} />
            </article>
          </section>
        </div>

        <section id="skills" className="section-block expertise-section">
          <div className="section-heading-row"><div><p className="section-kicker">Technical range</p><h2>A balanced engineering toolkit.</h2></div><p>Modern web foundations, applied AI, cloud delivery, data systems, and SAP technologies—used according to the problem, not as a one-size-fits-all stack.</p></div>
          <div className="skills-grid">
            {balancedSkills.map((category) => <article key={category.category}><span>{category.index}</span><h3>{category.category}</h3><div>{category.skills.map((skill) => <small key={skill}>{skill}</small>)}</div></article>)}
          </div>
        </section>

        <section id="education" className="section-block education-section">
          <div className="section-heading-row compact"><div><p className="section-kicker">Education & learning</p><h2>Built on strong fundamentals.</h2></div></div>
          <div className="education-layout">
            <div className="degree-list">
              {education.map((item) => <article key={item.degree}><GraduationCap size={22} /><div><h3>{item.degree}</h3><strong>{item.university}</strong><p>{item.duration} · {item.location}</p>{item.gpa ? <span>GPA {item.gpa} · {item.award}</span> : null}</div></article>)}
            </div>
            <div className="learning-panel">
              <div><p className="mini-heading">SAP Learning</p><ul>{sapLearning.map((item) => <li key={item}><Check size={13} />{item}</li>)}</ul></div>
              <div><p className="mini-heading">Additional credentials</p><ul>{additionalLearning.map((item) => <li key={item}><Check size={13} />{item}</li>)}</ul></div>
            </div>
          </div>
        </section>

        <section id="writing" className="section-block writing-section">
          <div className="panel-heading"><h2>Writing</h2><span /><p>Ideas shared on LinkedIn</p></div>
          <div className="article-grid">
            {articles.map((article, index) => <a key={article.title} href={article.externalUrl} target="_blank" rel="noreferrer" className="article-card"><div className={`article-visual article-${index + 1}`}><span>0{index + 1}</span><PenLine size={22} /></div><div><small>{article.category}</small><h3>{article.title}</h3><p>{article.summary}</p><strong>{article.externalLabel}<ArrowUpRight size={14} /></strong></div></a>)}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div><p className="section-kicker">Available for new opportunities</p><h2>Let&apos;s build something useful.</h2><p>I&apos;m open to software engineering, full-stack, data/AI, cloud, and SAP BTP opportunities.</p></div>
          <div className="contact-actions"><a className="primary-action" href="mailto:nanapusaisreeram2002@gmail.com"><Mail size={16} /> Email me</a><a href="tel:+19282557249">+1 (928) 255-7249</a></div>
        </section>

        <footer className="site-footer"><span>© 2026 Sai Sreeram Nanapu</span><span>Full-stack · Data & AI · Cloud · Enterprise</span><a href="#home">Back to top ↑</a></footer>
      </main>
    </div>
  );
}
