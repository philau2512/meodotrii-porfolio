/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.beacons.ai'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.beacons.ai',
        pathname: '/user_content/**',
      },
      {
        protocol: 'https',
        hostname: '**.shopee.vn',
      },
    ],
    unoptimized: true, // Allow local images from public folder to work without optimization
  },
};

export default nextConfig;
