/** @type {import('next').NextConfig} */
const { NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY } = process.env;

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.habbo.com.br"],
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  compiler: {
    styledComponents: {
      ssr: true,
      minify: true,
    },
  },
};

module.exports = nextConfig;
