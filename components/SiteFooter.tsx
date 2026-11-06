import { portfolio } from "@/lib/data";

export default function SiteFooter() {
  const o = portfolio.owner;
  return (
    <footer className="site-footer">
      <div><strong>{o.name}</strong><br /><a href={`mailto:${o.email}`}>{o.email}</a></div>
      <nav aria-label="Social links">
        {o.links.map(l => <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a>)}
      </nav>
      <a className="btn" href={o.resume} download>Download Resume</a>
    </footer>
  );
}
