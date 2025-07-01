/** @type {import('next').NextConfig} */
const nextConfig = {};
nextConfig.images = {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'bekk.pythonanywhere.com',
            port: '',
            pathname: '/images/**',
        },
    ],
};
export default nextConfig;
