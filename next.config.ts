import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  devIndicators: false,
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.flaticon.com'
      }
    ]
  }
}

export default nextConfig
