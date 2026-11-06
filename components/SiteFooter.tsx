import ContactIcon from "./ContactIcon";
import { portfolio } from "@/lib/data";

export default function SiteFooter() {
  const o = portfolio.owner;
  return (
    <footer className="site-footer">
      <div><strong>{o.name}</strong></div>
      <nav className="contact" aria-label="Contact">
        <a href={`mailto:${o.email}`} aria-label={`Email ${o.email}`} title={o.email}><ContactIcon name="Email" /></a>
        {o.links.map(l => (
          <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" aria-label={l.label} title={l.label}><ContactIcon name={l.label} /></a>
        ))}
      </nav>
      <a className="btn" href={o.resume} download>Download Resume</a>
    </footer>
  );
}
