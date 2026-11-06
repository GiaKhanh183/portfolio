"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

/** Link with the short "portal" transition between universes. */
export default function PortalLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  const router = useRouter();
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    e.preventDefault();
    document.body.classList.add("leaving");
    setTimeout(() => router.push(href), 450);
  };
  return <Link href={href} className={className} onClick={onClick}>{children}</Link>;
}
