import "../styles/hub.css";
import PortalLink from "@/components/PortalLink";
import Starfield from "@/components/Starfield";
import { portfolio } from "@/lib/data";

export default function Hub() {
  const o = portfolio.owner;
  return (
    <div className="u u-hub">
      <Starfield />
      <header className="hub-top">
        <span className="mark">{o.initials}</span>
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
      </main>

      <footer className="hub-foot">
        <a href={`mailto:${o.email}`}>{o.email}</a>
        <a className="btn" href={o.resume} download>Download Resume</a>
      </footer>
    </div>
  );
}
