/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/projects/image-gallery",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
