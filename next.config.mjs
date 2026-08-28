/** @type {import('next').NextConfig} */
const nextConfig = {};
nextConfig.allowedDevOrigins = ['192.168.68.57'];
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
