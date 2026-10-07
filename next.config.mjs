// STATIC_EXPORT=1 builds plain files into ./out (used for CLI deploys from Windows).
const staticExport = process.env.STATIC_EXPORT === '1';

/** @type {import('next').NextConfig} */
const nextConfig = staticExport
  ? { output: 'export', images: { unoptimized: true } }
  : { images: { formats: ['image/avif', 'image/webp'] } };
export default nextConfig;
