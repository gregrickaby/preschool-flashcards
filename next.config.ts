import type {NextConfig} from 'next'

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withPWA = require('next-pwa')({dest: 'public'})

const nextConfig: NextConfig = {
  turbopack: {}
}

export default withPWA(nextConfig) as NextConfig
