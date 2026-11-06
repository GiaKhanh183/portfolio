import type { Metadata } from "next";
import "../../styles/design.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import DesignGrid from "@/components/DesignGrid";
import { portfolio } from "@/lib/data";

export const metadata: Metadata = { title: "Design", description: "Design projects: social media, print collateral, branding and infographics." };

export default function DesignPage() {
  return (
    <div className="u u-design">
      <SiteHeader />
      <main id="main">
        <section className="hero">
          <p className="kicker">Universe 01</p>
          <h1>Design.</h1>
          <p className="lede">Posters, social content, branding and infographics, made with a clear grid, strong type and one idea per layout.</p>
          <p className="toolbar"><span>Photoshop</span><span>Illustrator</span><span>Canva</span></p>
        </section>
        <section aria-label="Design projects"><DesignGrid projects={portfolio.design} /></section>
      </main>
      <SiteFooter />
    </div>
  );
}
