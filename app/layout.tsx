import type { Metadata, Viewport } from "next";
import "../styles/globals.css";
import PortalFade from "@/components/PortalFade";
import { portfolio } from "@/lib/data";

export const metadata: Metadata = {
  title: { default: `${portfolio.owner.name} · Multiverse Portfolio`, template: `%s · ${portfolio.owner.name}` },
  description: "A multiverse portfolio: design, web development and photography.",
};
export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">Skip to content</a>
        {children}
        <PortalFade />
      </body>
    </html>
  );
}
