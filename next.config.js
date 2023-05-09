/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    BASE_URL:
      process.env.NODE_ENV === 'development'
        ? 'https://resimex-academlo-api.academlo.tech/api/v1'
        : 'https://resimex-academlo-api.academlo.tech/api/v1',
  },
};

module.exports = nextConfig;
