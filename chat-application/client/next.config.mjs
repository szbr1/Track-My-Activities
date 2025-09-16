// next.config.mjs
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://track-my-activities-1.onrender.com/api/:path*",
      },
    ];
  },
};

export default nextConfig;

