/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
});

const plugins = [withBundleAnalyzer, withMDX];

module.exports = (_phase, { defaultConfig }) => {
  const finalConfig = { ...defaultConfig, config };
  plugins.forEach((plugin) => plugin(finalConfig));
  return finalConfig;
};
