import type { Metadata } from "next";
import "../../styles/webdev.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { portfolio } from "@/lib/data";

export const metadata: Metadata = { title: "Web Dev", description: "Web development projects: responsive email templates, landing pages and JavaScript apps." };

export default function WebDevPage() {
  return (
    <div className="u u-webdev">
      <SiteHeader />
      <main id="main">
        <section className="hero" aria-label="Introduction">
          <p className="prompt"><span className="usr">visitor@portfolio</span>:<span className="dir">~</span>$ whoami</p>
          <h1>I build clean, responsive web pages<span className="caret" aria-hidden="true" /></h1>
          <p className="plain">HTML, CSS and JavaScript, from email campaigns that survive Outlook to full landing pages. Design and code in one hand.</p>
          <p className="prompt"><span className="usr">visitor@portfolio</span>:<span className="dir">~</span>$ ls projects/</p>
        </section>

        <section className="projects" aria-label="Web projects">
          {portfolio.webdev.map(p => (
            <article className="proj" key={p.name}>
              <div className="bar"><i /><i /><i /><span>~/projects/{p.name}/</span></div>
              <div className="body">
                <h3>{p.title}</h3>
                <p className="plain">{p.summary}</p>
                <p className="stack">{p.stack.map(s => <code key={s}>{s}</code>)}</p>
                <p className="actions">
                  <a className="btn primary" href={p.demo} target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
                  <a className="btn" href={p.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </p>
              </div>
            </article>
          ))}
        </section>

        <section className="how">
          <p className="prompt"><span className="usr">visitor@portfolio</span>:<span className="dir">~</span>$ cat how-this-site-works.md</p>
          <p>This portfolio is built with Next.js (App Router), React and TypeScript. Each universe has its own scoped stylesheet, and all projects are loaded from a single typed data file. It is responsive, keyboard accessible and respects reduced-motion settings.</p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
