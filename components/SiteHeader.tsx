import PortalLink from "./PortalLink";
import { portfolio } from "@/lib/data";

export default function SiteHeader() {
  const o = portfolio.owner;
  return (
    <header className="site-header">
      <PortalLink href="/" className="brand"><span className="mark">{o.avatar ? <img src={o.avatar} alt={o.name} /> : o.initials}</span><span>{o.name}</span></PortalLink>
      <PortalLink href="/" className="back">← Back to Multiverse</PortalLink>
    </header>
  );
}
