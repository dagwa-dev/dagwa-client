/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })
    return config
  },
  images: {
    unoptimized: true,
  },
  rewrites: async () => [
    {
      source: "/api/:path*",
      destination: "https://dagwa-api-production.up.railway.app/:path*",
    },
  ],
  env: {
    IS_LOCAL: process.env.IS_LOCAL,
    NEXT_PUBLIC_GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
    SERVICE_ENDPOINT: process.env.SERVICE_ENDPOINT,
    CMC_ENDPOINT: process.env.CMC_ENDPOINT,
    COVALENT_ENDPOINT: process.env.COVALENT_ENDPOINT,
    CHAIN_NETWORK_ENDPOINT: process.env.CHAIN_NETWORK_ENDPOINT,
    LLAMAFI_ENDPOINT: process.env.LLAMAFI_ENDPOINT,
  },
}

module.exports = nextConfig
