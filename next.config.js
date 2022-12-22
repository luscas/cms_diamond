/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.habbo.com.br"],
  },
  compiler: {
    styledComponents: {
      ssr: true,
      minify: true,
    },
  },
};

module.exports = nextConfig;
