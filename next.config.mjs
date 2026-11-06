/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` creates a plain `out/` folder you can
  // upload anywhere (Netlify, GitHub Pages, Vercel). Remove if you need SSR.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
