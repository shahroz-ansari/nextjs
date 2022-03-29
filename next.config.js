/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/game2",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
      {
        source: "/game3",
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOW-FROM https://gamezop.com/",
          },
        ],
      },
    ];
  },
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos"],
  },
};

module.exports = nextConfig;
