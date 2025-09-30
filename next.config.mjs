/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      turbo: false,
    },
      eslint: {
    ignoreDuringBuilds: true,
  },
  };
  
  export default nextConfig;
  