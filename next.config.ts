import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/press',
        destination: '/inthenews',
        permanent: true,
      },
    ]
  },
}

export default nextConfig;
