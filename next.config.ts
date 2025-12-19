import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // This is required to allow the Next.js dev server to be accessed from the Studio preview.
  allowedDevOrigins: [
    '*.cluster-yylgzpipxrar4v4a72liastuqy.cloudworkstations.dev',
  ],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
