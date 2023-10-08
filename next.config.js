module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn-images-1.medium.com','medium.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
