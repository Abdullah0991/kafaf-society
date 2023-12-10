/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        domains: ['unsplash.it']
    },
    distDir: 'build',
    // output: 'export',
    // trailingSlash: true
}

module.exports = nextConfig
