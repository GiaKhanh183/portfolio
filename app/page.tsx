import "../styles/hub.css";
import PortalLink from "@/components/PortalLink";
import Starfield from "@/components/Starfield";
import { portfolio } from "@/lib/data";

function ContactIcon({ name }: { name: string }) {
  const common = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  if (name === "Email") return (
    <svg {...common}><rect x="2.5" y="5" width="19" height="14" rx="2" /><path d="M3 6.5l9 6.5 9-6.5" /></svg>
  );
  if (name === "LinkedIn") return (
    <svg {...common}><rect x="3" y="3" width="18" height="18" rx="2.5" /><path d="M8 10.5v6" /><circle cx="8" cy="7.6" r=".6" fill="currentColor" /><path d="M12 16.5v-6" /><path d="M12 13.5a2.5 2.5 0 0 1 5 0v3" /></svg>
  );
  if (name === "GitHub") return (
    <svg {...common} fill="currentColor" stroke="none"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
  );
  // Instagram
  return (
    <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
  );
}

export default function Hub() {
  const o = portfolio.owner;
  return (
    <div className="u u-hub">
      <Starfield />
      <header className="hub-top">
        <span className="mark">{o.avatar ? <img src={o.avatar} alt={o.name} /> : o.initials}</span>
        <PortalLink href="/design" className="quick">Skip to Design →</PortalLink>
      </header>

      <main id="main">
        <p className="eyebrow">{o.tagline}</p>
        <h1>Hi, I&apos;m <span>{o.name}</span>.<br />Choose a universe.</h1>
        <p className="intro">{o.intro}</p>

        <ul className="portals">
          <li>
            <PortalLink href="/design" className="portal p-design">
              <span className="orb"><b>Aa</b></span>
              <span className="label">Design</span>
              <span className="peek">Posters, social, branding · Photoshop, Illustrator, Canva</span>
            </PortalLink>
          </li>
          <li>
            <PortalLink href="/webdev" className="portal p-dev">
              <span className="orb"><b>&lt;/&gt;</b></span>
              <span className="label">Web Dev</span>
              <span className="peek">Email templates, landing pages, JavaScript</span>
            </PortalLink>
          </li>
          <li>
            <PortalLink href="/photography" className="portal p-photo">
              <span className="orb"><b>◉</b></span>
              <span className="label">Photography</span>
              <span className="peek">Events, campus and travel</span>
            </PortalLink>
          </li>
        </ul>

        <section className="about" aria-labelledby="about-title">
          <h2 id="about-title">About me</h2>
          <p>{o.bio}</p>
        </section>
      </main>

      <footer className="hub-foot">
        <nav className="contact" aria-label="Contact">
          <a href={`mailto:${o.email}`} aria-label={`Email ${o.email}`} title={o.email}><ContactIcon name="Email" /></a>
          {o.links.map(l => (
            <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" aria-label={l.label} title={l.label}><ContactIcon name={l.label} /></a>
          ))}
        </nav>
        <a className="btn" href={o.resume} download>Download Resume</a>
      </footer>
    </div>
  );
}
