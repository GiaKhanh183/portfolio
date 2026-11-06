"use client";
import { useRef, useState, type KeyboardEvent } from "react";
import Media from "./Media";
import type { Photo } from "@/lib/data";

export default function PhotoGallery({ photos }: { photos: Photo[] }) {
  const series = ["All", ...Array.from(new Set(photos.map(p => p.series)))];
  const [filter, setFilter] = useState("All");
  const [cur, setCur] = useState(0);
  const lb = useRef<HTMLDialogElement>(null);
  const go = (i: number) => setCur((i + photos.length) % photos.length);
  const p = photos[cur];
  const onKey = (e: KeyboardEvent) => { if (e.key === "ArrowLeft") go(cur - 1); if (e.key === "ArrowRight") go(cur + 1); };

  return (
    <>
      <div className="filters" role="group" aria-label="Filter by category">
        {series.map(s => <button key={s} className={s === filter ? "on" : ""} onClick={() => setFilter(s)}>{s}</button>)}
      </div>

      <section className="gallery" aria-label="Photo gallery">
        {photos.map((q, i) => ({ q, i })).filter(({ q }) => filter === "All" || q.series === filter).map(({ q, i }) => (
          <figure key={q.title} style={{ aspectRatio: q.ratio }}>
            <button aria-label={`View photo: ${q.title}`} onClick={() => { setCur(i); lb.current?.showModal(); }}>
              <Media title={q.title} image={q.image} alt={q.alt} hue={q.hue} n={i} />
              <figcaption><span>{q.place ? `${q.series} · ${q.place}` : q.series}</span></figcaption>
            </button>
          </figure>
        ))}
      </section>

      <dialog ref={lb} aria-label="Photo viewer" onKeyDown={onKey} onClick={e => { if (e.target === lb.current) lb.current?.close(); }}>
        <button className="lb-btn lb-close" aria-label="Close" onClick={() => lb.current?.close()}>✕</button>
        <button className="lb-btn lb-prev" aria-label="Previous photo" onClick={() => go(cur - 1)}>‹</button>
        <div className="lb-img"><Media title={p.title} image={p.image} alt={p.alt} hue={p.hue} n={cur} /></div>
        <button className="lb-btn lb-next" aria-label="Next photo" onClick={() => go(cur + 1)}>›</button>
        <p className="lb-cap">{p.series}{p.place ? ` · ${p.place}` : ""}</p>
      </dialog>
    </>
  );
}
