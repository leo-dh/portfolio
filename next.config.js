// @ts-check
const path = require("path");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
/**
 * @type {import('next').NextConfig}
 **/
// @ts-ignore
const nextConfig = {
  webpack: (config, { dev }) => {
    if (!dev)
      config.module.rules.push({
        include: [path.resolve(__dirname, "components/index.ts")],
        sideEffects: false,
      });
    return config;
  },
};
module.exports = withBundleAnalyzer(nextConfig);
