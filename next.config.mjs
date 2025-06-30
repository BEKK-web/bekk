/** @type {import('next').NextConfig} */
const nextConfig = {};
nextConfig.images = {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'picsum.photos',
            port: '',
            pathname: '/**',
        },
    ],
};
export default nextConfig;
