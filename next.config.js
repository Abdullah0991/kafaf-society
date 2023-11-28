/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        domains: ['unsplash.it']
    },
    distDir: 'build',
    output: 'export',
}

module.exports = nextConfig
