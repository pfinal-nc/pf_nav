import { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { SiteContent } from '@/components/site-content';
import { SearchWithResults } from '@/components/search-with-results';
import { StructuredData } from '@/components/structured-data';
import { Suspense } from 'react';
import { GridSkeleton } from '@/components/GridSkeleton';
import { siteConfig } from '@/config/site';
import { getPageData } from '@/lib/notion';
import { Sparkles, Zap, Brain, Palette, ArrowDown } from 'lucide-react';

export const metadata: Metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.links.homepage
    }
  ],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
        type: 'image/jpeg',
      }
    ],
    locale: siteConfig.language,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@pfinal_nc',
    site: '@pfinal_nc',
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'application-name': 'AI Tools Directory',
    'apple-mobile-web-app-title': 'AI Tools Directory',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#4f46e5',
    'theme-color': '#4f46e5',
  }
}

export default async function Page() {
  console.log('before getPageData');
  const pageData = await getPageData();
  console.log('after getPageData', pageData);
  const allItems = Object.values(pageData.items || {}).flat()

  return (
    <>
      <StructuredData />
      <div data-wrapper='' className='border-grid flex flex-1 flex-col min-h-svh'>
        <SiteHeader />
        <main className='flex flex-1 flex-col'>
          {/* Hero Section */}
          <section className='relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 py-16 md:py-24'>
            <div className='container-wrapper'>
              <div className='mx-auto max-w-4xl text-center'>
                <div className='mb-8 flex justify-center'>
                  <div className='flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-200'>
                    <Sparkles className='h-4 w-4' />
                    AI Tools Directory
                  </div>
                </div>
                <h1 className='mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-6xl'>
                  Discover the Best
                  <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                    AI Tools
                  </span>
                </h1>
                <p className='mb-8 text-lg text-gray-600 dark:text-gray-300 md:text-xl'>
                  Curated collection of premium AI tools worldwide, including ChatGPT, Claude, Midjourney, Stable Diffusion, GitHub Copilot and more. AI chat, AI painting, AI programming, AI office, AI translation, AI writing and other applications. Latest AI tools recommendations for 2024, free AI tools directory.
                </p>
                
                {/* Feature Icons */}
                <div className='mb-8 flex justify-center gap-8 text-gray-600 dark:text-gray-400' role="list" aria-label="Main Features">
                  <div className='flex items-center gap-2' role="listitem">
                    <Brain className='h-5 w-5' aria-hidden="true" />
                    <span className='text-sm'>Smart Chat</span>
                  </div>
                  <div className='flex items-center gap-2' role="listitem">
                    <Palette className='h-5 w-5' aria-hidden="true" />
                    <span className='text-sm'>AI Painting</span>
                  </div>
                  <div className='flex items-center gap-2' role="listitem">
                    <Zap className='h-5 w-5' aria-hidden="true" />
                    <span className='text-sm'>Code Assistant</span>
                  </div>
                </div>

                {/* Scroll Hint */}
                <div className='flex justify-center'>
                  <a
                    href='#category-ai'
                    className='flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors animate-bounce'
                    aria-label='Scroll to AI tools list'
                  >
                    <span>Explore Tools</span>
                    <ArrowDown className='h-4 w-4' aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Background Pattern */}
            <div className='absolute inset-0 -z-10 opacity-10'>
              <div className='absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:14px_24px]'></div>
            </div>
          </section>

          {/* Search Section */}
          <section className='container-wrapper py-8'>
            <div className='mx-auto max-w-4xl'>
              <SearchWithResults allItems={allItems} />
            </div>
          </section>

          {/* Content Section */}
          <section className='container-wrapper pb-16'>
            <Suspense fallback={<GridSkeleton />}>
              <SiteContent />
            </Suspense>
          </section>

          {/* About Section */}
          <section id='about' className='bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 py-16' aria-labelledby="about-title">
            <div className='container-wrapper'>
              <div className='mx-auto max-w-4xl text-center'>
                <h2 id="about-title" className='mb-6 text-3xl font-bold text-gray-900 dark:text-white'>
                  About AI Tools Directory
                </h2>
                <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
                  We are committed to collecting and organizing the world's finest artificial intelligence tools, providing developers, designers, creators, and all AI enthusiasts with a convenient tool discovery platform.
                  Whether it's conversational AI, image generation, code assistants, or office tools, we continuously update to ensure you can find the most suitable tools.
                </p>
                <div className='mt-8 flex justify-center gap-4' role="list" aria-label="Website Statistics">
                  <div className='text-center' role="listitem">
                    <div className='text-2xl font-bold text-purple-600 dark:text-purple-400'>
                      {allItems.length}+
                    </div>
                    <div className='text-sm text-gray-600 dark:text-gray-400'>Curated Tools</div>
                  </div>
                  <div className='text-center' role="listitem">
                    <div className='text-2xl font-bold text-pink-600 dark:text-pink-400'>
                      Regular Updates
                    </div>
                    <div className='text-sm text-gray-600 dark:text-gray-400'>Ongoing Maintenance</div>
                  </div>
                  <div className='text-center' role="listitem">
                    <div className='text-2xl font-bold text-blue-600 dark:text-blue-400'>
                      Free to Use
                    </div>
                    <div className='text-sm text-gray-600 dark:text-gray-400'>Completely Free</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}