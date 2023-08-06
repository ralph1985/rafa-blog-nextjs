/** @type {import('next').NextConfig} */
const path = require('path');
const nextTranslate = require('next-translate-plugin');

const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextTranslate(nextConfig);
