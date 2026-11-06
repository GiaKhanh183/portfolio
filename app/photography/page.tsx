import type { Metadata } from "next";
import "../../styles/photo.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PhotoGallery from "@/components/PhotoGallery";
import { portfolio } from "@/lib/data";

export const metadata: Metadata = { title: "Photography", description: "Photography: events, on-campus and off-campus." };

export default function PhotographyPage() {
  return (
    <div className="u u-photo">
      <SiteHeader />
      <main id="main">
        <section className="hero">
          <p className="kicker">Universe 03</p>
          <h1>Photography</h1>
          <p className="lede">Light, moments and quiet details, collected in series.</p>
        </section>
        <PhotoGallery photos={portfolio.photo} />
      </main>
      <SiteFooter />
    </div>
  );
}
