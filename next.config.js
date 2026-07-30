/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/news/1'
      }
    ]
  },
 images: {
    domains: ["img.freepik.com", "veterinaire-tour-hassan.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: "raw-loader",
    });
  return config;
  },
}

module.exports = {
   webpack: (config) => {
    nextConfig
    config.resolve.alias.canvas = false;
    return config;
  },
}
