/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.giphy.com",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "opengraph.githubassets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "aura-ar.vercel.app",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "chatbotish.vercel.app",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "sahaay.xyz",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.scdn.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "image-cdn-ak.spotifycdn.com",
        pathname: "/**",
      },
    ],
  },
};
