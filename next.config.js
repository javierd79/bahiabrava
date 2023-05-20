/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/app/api/:path*',
      },
    ];
  },
}

module.exports = {
  // Otras configuraciones...
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/app/api/:path*',
      },
    ];
  },
};