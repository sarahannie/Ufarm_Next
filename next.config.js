/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
      },
      images: {
        domains: ['images.unsplash.com', "www.freepnglogos.com"],
      }
}

module.exports = nextConfig
