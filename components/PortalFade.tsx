"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Full-screen overlay used by the portal transition. Clears itself after each navigation. */
export default function PortalFade() {
  const pathname = usePathname();
  useEffect(() => { document.body.classList.remove("leaving"); }, [pathname]);
  return <div className="portal-fade" aria-hidden="true" />;
}
