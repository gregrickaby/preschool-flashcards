import type {ReactNode} from 'react'
import type {Metadata, Viewport} from 'next'
import config from '@/lib/config'
import 'pure-react-carousel/dist/react-carousel.es.css'
import '@/styles/index.css'

export const metadata: Metadata = {
  metadataBase: new URL(config.siteUrl),
  title: {
    default: config.siteName,
    template: `%s | ${config.siteName}`
  },
  description: config.siteDescription,
  openGraph: {
    type: 'website',
    siteName: config.siteName,
    url: config.siteUrl,
    images: ['/favicon/apple-icon.png']
  },
  twitter: {
    card: 'summary',
    creator: config.author,
    images: ['/favicon/android-icon-192x192.png']
  },
  icons: {
    apple: '/favicon/apple-icon.png',
    icon: [
      {url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png'},
      {url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png'}
    ],
    shortcut: '/favicon/favicon.ico'
  },
  manifest: '/favicon/site.webmanifest',
  other: {
    'msapplication-TileColor': '#ffffff',
    'msapplication-config': '/favicon/browserconfig.xml'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff'
}

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
