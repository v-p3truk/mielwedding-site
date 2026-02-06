/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.google.com https://tagassistant.google.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://tagmanager.google.com",
              "img-src 'self' data: https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.google.ge https://googleads.g.doubleclick.net https://www.google.com.ua https://*.google.com",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://analytics.google.com https://stats.g.doubleclick.net https://formspree.io https://region1.google-analytics.com",
              "frame-src https://www.googletagmanager.com https://td.doubleclick.net https://www.google.com",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
