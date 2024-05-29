/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: '/mdc-calculator',
  reactStrictMode: true,
  publicRuntimeConfig: {
    BASE_PATH: '/mdc-calculator',
  },
  images: {
    domains: ['enka.network'],
  },
}

module.exports = nextConfig
