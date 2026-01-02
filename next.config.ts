import { NextConfig } from 'next'; // Import NextConfig type

const nextConfig: NextConfig = {
  images: {
    // Define remote image patterns (domains is deprecated)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imperialmobilegallery.b-cdn.net',
      },
    ],
  },
};

export default nextConfig;
