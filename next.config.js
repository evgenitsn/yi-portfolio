module.exports = {
  images: {
    domains: ['images.ctfassets.net', 'downloads.ctfassets.net'],
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
