import "../styles/hub.css";
import PortalLink from "@/components/PortalLink";
import Starfield from "@/components/Starfield";
import ContactIcon from "@/components/ContactIcon";
import { portfolio } from "@/lib/data";

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
