import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    browsersListForSwc: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-ec2cb0892de943b0b34452bdaf3b4997.r2.dev',
      },
    ],
  },
}

export default nextConfig
