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

export const metadata: Metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
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
  },
  alternates: {
    canonical: siteConfig.url,
  },
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
        <main className='flex flex-1 flex-col container-wrapper p-4'>
          <div className="mb-8">
            <SearchWithResults allItems={allItems} />
          </div>
          <Suspense fallback={<GridSkeleton />}>
            <SiteContent />
          </Suspense>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}