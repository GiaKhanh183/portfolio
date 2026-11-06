"use client";
import { useEffect, useRef } from "react";

export default function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current!;
    const x = c.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0;
    let stars: { x: number; y: number; r: number; v: number }[] = [];
    const init = () => {
      w = c.width = window.innerWidth; h = c.height = window.innerHeight;
      stars = Array.from({ length: Math.min(160, Math.floor(w * h / 9000)) }, () => ({
        x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.4 + 0.2, v: Math.random() * 0.25 + 0.05,
      }));
    };
    const draw = () => {
      x.clearRect(0, 0, w, h);
      x.fillStyle = "#fff";
      for (const s of stars) {
        x.globalAlpha = 0.4 + s.r / 2.2;
        x.beginPath(); x.arc(s.x, s.y, s.r, 0, 6.283); x.fill();
        if (!reduce) { s.y += s.v; if (s.y > h) { s.y = 0; s.x = Math.random() * w; } }
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    const onResize = () => { init(); if (reduce) draw(); };
    init(); draw();
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);
  return <canvas id="stars" ref={ref} aria-hidden="true" />;
}
