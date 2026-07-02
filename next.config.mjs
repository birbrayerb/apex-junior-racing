/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static-friendly: no server features used in v1.
  // When Brian adds real rider/sponsor imagery to /public, Next's <Image>
  // will optimize it automatically. If he later serves images from a remote
  // host (e.g. a CDN), add it to images.remotePatterns here.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
