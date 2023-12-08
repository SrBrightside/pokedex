const withTwin = require('./withTwin.js')

/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
})

module.exports = nextConfig
