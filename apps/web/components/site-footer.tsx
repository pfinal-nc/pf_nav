import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Brain, Sparkles, Github, Twitter, Heart } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className='border-t bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20'>
      <div className='container-wrapper'>
        <div className='grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4'>
          {/* 品牌信息 */}
          <div className='space-y-4'>
            <div className='flex items-center gap-2'>
              <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white'>
                <Brain className='h-5 w-5' />
              </div>
              <span className='font-bold text-lg'>AI 工具导航</span>
            </div>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              精选全球优质人工智能工具，助力提升工作效率和创造力
            </p>
            <div className='flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400'>
              <span>Made with</span>
              <Heart className='h-4 w-4 text-red-500' />
              <span>by PFinalClub</span>
            </div>
          </div>

          {/* 快速链接 */}
          <div className='space-y-4'>
            <h3 className='font-semibold text-gray-900 dark:text-white'>快速链接</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='/' className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors'>
                  首页
                </Link>
              </li>
              <li>
                <Link href='#ai-tools' className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors'>
                  AI 工具
                </Link>
              </li>
              <li>
                <Link href='#about' className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors'>
                  关于我们
                </Link>
              </li>
              <li>
                <Link href='/rss.xml' className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors'>
                  RSS 订阅
                </Link>
              </li>
            </ul>
          </div>

          {/* 工具分类 */}
          <div className='space-y-4'>
            <h3 className='font-semibold text-gray-900 dark:text-white'>工具分类</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <span className='text-gray-600 dark:text-gray-400'>🤖 AI 对话</span>
              </li>
              <li>
                <span className='text-gray-600 dark:text-gray-400'>🎨 AI 绘画</span>
              </li>
              <li>
                <span className='text-gray-600 dark:text-gray-400'>💻 编程助手</span>
              </li>
              <li>
                <span className='text-gray-600 dark:text-gray-400'>🛠️ 开发工具</span>
              </li>
            </ul>
          </div>

          {/* 联系信息 */}
          <div className='space-y-4'>
            <h3 className='font-semibold text-gray-900 dark:text-white'>联系我们</h3>
            <div className='space-y-2 text-sm'>
              <div className='flex items-center gap-2 text-gray-600 dark:text-gray-400'>
                <Sparkles className='h-4 w-4' />
                <span>AI 工具导航</span>
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

        {/* 底部版权信息 */}
        <div className='border-t border-gray-200 dark:border-gray-800 py-6'>
          <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              © 2024 {siteConfig.name}. All rights reserved.
            </p>
            <div className='flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400'>
              <Link href='/privacy' className='hover:text-gray-900 dark:hover:text-white transition-colors'>
                隐私政策
              </Link>
              <Link href='/terms' className='hover:text-gray-900 dark:hover:text-white transition-colors'>
                使用条款
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
