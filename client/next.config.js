/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GRAPHQL_HOST: process.env.GRAPHQL_HOST,
    IDENTITY_URL: process.env.IDENTITY_URL
  }
}

module.exports = nextConfig
