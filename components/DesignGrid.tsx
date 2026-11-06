"use client";
import { useRef, useState } from "react";
import Media from "./Media";
import type { DesignProject } from "@/lib/data";

export default function DesignGrid({ projects }: { projects: DesignProject[] }) {
  const dlg = useRef<HTMLDialogElement>(null);
  const [cur, setCur] = useState(0);
  const p = projects[cur];

  return (
    <>
      <div className="grid">
        {projects.map((q, i) => (
          <article className="card" key={q.title}>
            <button className="card-btn" aria-label={`Open project: ${q.title}`} onClick={() => { setCur(i); dlg.current?.showModal(); }}>
              <div className="media"><Media title={q.title} image={q.image} alt={q.alt} hue={q.hue} n={i} /></div>
              <div className="meta">
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{q.title}</h3>
                <p className="type">{q.type}</p>
                <p className="tools">{q.tools.map(t => <span key={t}>{t}</span>)}</p>
                <p>{q.blurb}</p>
              </div>
            </button>
          </article>
        ))}
      </div>

      <dialog ref={dlg} aria-label="Project details" onClick={e => { if (e.target === dlg.current) dlg.current?.close(); }}>
        <button className="close" aria-label="Close" onClick={() => dlg.current?.close()}>✕</button>
        <div id="detail-body">
          <div className="d-media">
            {p.images?.length
              ? <div className="d-gallery">{p.images.map((src, k) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={src} src={src} alt={`${p.title}, slide ${k + 1} of ${p.images!.length}`} loading="lazy" />
                ))}</div>
              : <Media title={p.title} image={p.image} alt={p.alt} hue={p.hue} n={cur} />}
          </div>
          <div className="d-text">
            <p className="type">{p.type}</p>
            <h2>{p.title}</h2>
            <dl>
              <dt>Problem</dt><dd>{p.problem}</dd>
              <dt>My role</dt><dd>{p.role}</dd>
              <dt>Tools</dt><dd>{p.tools.join(", ")}</dd>
              <dt>Result</dt><dd>{p.result}</dd>
            </dl>
            {p.instagram && (
              <a className="ig-link" href={p.instagram} target="_blank" rel="noopener noreferrer" aria-label={`View ${p.title} on Instagram`}>
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>              </a>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
