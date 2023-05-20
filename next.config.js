/** @type {import('next').NextConfig} */
const nextConfig = {}

const withImages = require('next-images');

module.exports = withImages({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.node$/,
        loader: 'ignore-loader',
      });
    }

    return config;
  },
});