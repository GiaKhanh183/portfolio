/* Real image if provided, otherwise a colored placeholder. */
export default function Media({ title, image, alt, hue = 200, n = 0 }: { title: string; image?: string; alt?: string; hue?: number; n?: number }) {
  if (image) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={image} alt={alt || title} loading="lazy" />;
  }
  const bg = `linear-gradient(${135 + n * 25}deg,hsl(${hue} 45% 34%),hsl(${(hue + 50) % 360} 55% 14%))`;
  return <div className="ph" style={{ background: bg }} role="img" aria-label={`Placeholder image for ${title}`} />;
}
