/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.storyblok.com',
        port: '',
        pathname: 'f/202280/1400x787/cc7e5d126f/space.png/',
      },
    ],
  },
}

module.exports = nextConfig
