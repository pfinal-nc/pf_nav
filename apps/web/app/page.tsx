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
        <main className='flex flex-1 flex-col'>
          {/* Hero Section */}
          <section className='relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 py-16 md:py-24'>
            <div className='container-wrapper'>
              <div className='mx-auto max-w-4xl text-center'>
                <div className='mb-8 flex justify-center'>
                  <div className='flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-200'>
                    <Sparkles className='h-4 w-4' />
                    AI 工具导航
                  </div>
                </div>
                <h1 className='mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-6xl'>
                  发现最佳
                  <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                    AI 工具
                  </span>
                </h1>
                <p className='mb-8 text-lg text-gray-600 dark:text-gray-300 md:text-xl'>
                  精选全球优质人工智能工具，涵盖对话、绘画、编程、办公等各类应用
                </p>
                
                {/* Feature Icons */}
                <div className='mb-8 flex justify-center gap-8 text-gray-600 dark:text-gray-400'>
                  <div className='flex items-center gap-2'>
                    <Brain className='h-5 w-5' />
                    <span className='text-sm'>智能对话</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Palette className='h-5 w-5' />
                    <span className='text-sm'>AI 绘画</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Zap className='h-5 w-5' />
                    <span className='text-sm'>编程助手</span>
                  </div>
                </div>

                {/* 滚动提示 */}
                <div className='flex justify-center'>
                  <a
                    href='#ai-tools'
                    className='flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors animate-bounce'
                  >
                    <span>探索工具</span>
                    <ArrowDown className='h-4 w-4' />
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
          <section id='ai-tools' className='container-wrapper pb-16'>
            <Suspense fallback={<GridSkeleton />}>
              <SiteContent />
            </Suspense>
          </section>

          {/* About Section */}
          <section id='about' className='bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 py-16'>
            <div className='container-wrapper'>
              <div className='mx-auto max-w-4xl text-center'>
                <h2 className='mb-6 text-3xl font-bold text-gray-900 dark:text-white'>
                  关于 AI 工具导航
                </h2>
                <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
                  我们致力于收集和整理全球最优质的人工智能工具，为开发者、设计师、创作者和所有对 AI 感兴趣的用户提供便捷的工具发现平台。
                  无论是对话 AI、图像生成、代码助手还是办公工具，我们都会持续更新，确保您能找到最适合的工具。
                </p>
                <div className='mt-8 flex justify-center gap-4'>
                  <div className='text-center'>
                    <div className='text-2xl font-bold text-purple-600 dark:text-purple-400'>
                      {allItems.length}+
                    </div>
                    <div className='text-sm text-gray-600 dark:text-gray-400'>精选工具</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-2xl font-bold text-pink-600 dark:text-pink-400'>
                      持续更新
                    </div>
                    <div className='text-sm text-gray-600 dark:text-gray-400'>定期维护</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-2xl font-bold text-blue-600 dark:text-blue-400'>
                      免费使用
                    </div>
                    <div className='text-sm text-gray-600 dark:text-gray-400'>完全免费</div>
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