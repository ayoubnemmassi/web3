/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.entry = { main: ['./app/auction.js'] };
      }
      return config;
    },
  };
  
  module.exports = nextConfig;
  