import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Brain, Sparkles, Github, Twitter, Heart } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className='border-t bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20'>
      <div className='container-wrapper'>
        <div className='grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4'>
          {/* Brand Information */}
          <div className='space-y-4'>
            <div className='flex items-center gap-2'>
              <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white'>
                <Brain className='h-5 w-5' />
              </div>
              <span className='font-bold text-lg'>AI Tools Directory</span>
            </div>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              Curated collection of premium AI tools worldwide to boost productivity and creativity
            </p>
            <div className='flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400'>
              <span>Made with</span>
              <Heart className='h-4 w-4 text-red-500' />
              <span>by PFinalClub</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h3 className='font-semibold text-gray-900 dark:text-white'>Quick Links</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='/' className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='#category-ai' className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors'>
                  AI Chat
                </Link>
              </li>
              <li>
                <Link href='#category-ai-programming' className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors'>
                  AI Programming
                </Link>
              </li>
              <li>
                <Link href='#category-ai-video' className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors'>
                  AI Video
                </Link>
              </li>
              <li>
                <Link href='/llms.txt' className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors'>
                  llms.txt (GEO)
                </Link>
              </li>
              <li>
                <Link href='/rss.xml' className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors'>
                  RSS Feed
                </Link>
              </li>
            </ul>
          </div>

          {/* Tool Categories */}
          <div className='space-y-4'>
            <h3 className='font-semibold text-gray-900 dark:text-white'>Tool Categories</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='#category-ai' className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors'>AI Chat</Link>
              </li>
              <li>
                <Link href='#category-ai-painting' className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors'>AI Painting</Link>
              </li>
              <li>
                <Link href='#category-ai-video' className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors'>AI Video</Link>
              </li>
              <li>
                <Link href='#category-ai-programming' className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors'>AI Programming</Link>
              </li>
              <li>
                <Link href='#category-ai-writing' className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors'>AI Writing</Link>
              </li>
              <li>
                <Link href='#category-ai-design' className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors'>AI Design</Link>
              </li>
              <li>
                <Link href='#category-tools' className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors'>Tools</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className='space-y-4'>
            <h3 className='font-semibold text-gray-900 dark:text-white'>Contact Us</h3>
            <div className='space-y-2 text-sm'>
              <div className='flex items-center gap-2 text-gray-600 dark:text-gray-400'>
                <Sparkles className='h-4 w-4' />
                <span>AI Tools Directory</span>
              </div>
              <div className='flex items-center gap-2'>
                <Link
                  href={siteConfig.links.github}
                  target='_blank'
                  rel='noreferrer'
                  className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors'
                >
                  <Github className='h-4 w-4' />
                </Link>
                <Link
                  href={siteConfig.links.twitter}
                  target='_blank'
                  rel='noreferrer'
                  className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors'
                >
                  <Twitter className='h-4 w-4' />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className='border-t border-gray-200 dark:border-gray-800 py-6'>
          <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              © 2026 {siteConfig.name}. All rights reserved.
            </p>
            <div className='flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400'>
              <Link href='/privacy' className='hover:text-gray-900 dark:hover:text-white transition-colors'>
                Privacy Policy
              </Link>
              <Link href='/terms' className='hover:text-gray-900 dark:hover:text-white transition-colors'>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
