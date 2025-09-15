/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Allow dev overlay and HMR requests from Builder preview (replace with your preview host if different)
  allowedDevOrigins: [
    'https://87ecaef325c24d8090df04fbdcdb2ea7-415e05c1-8c04-4d32-a431-a319b3.projects.builder.codes',
    '*.projects.builder.codes',
    'localhost',
    '127.0.0.1',
    'https://87ecaef325c24d8090df04fbdcdb2ea7-415e05c1-8c04-4d32-a431-a319b3.fly.dev',
    '*.fly.dev'
  ],
}

export default nextConfig
