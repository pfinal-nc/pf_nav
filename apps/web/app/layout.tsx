import { Metadata, Viewport } from 'next'
import '@m-nav/ui/styles/globals.css'
import { Providers } from '@/components/providers'
import { Analytics } from '@/components/analytics'
import { fontSans, fontMono } from '@/lib/fonts'
import { META_THEME_COLORS, siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: ['Next.js', 'React', 'PFinalClub', 'PFinal', 'PFinalNC','Nav','Ai','Notion'],
  authors: [
    {
      name: 'pfinal-nc',
      url: 'https://github.com/pfinal-nc'
    }
  ],
  creator: 'pfinal-nc',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@pfinal-nc'
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/logo.png'
  }
}

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.light
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  )
}
