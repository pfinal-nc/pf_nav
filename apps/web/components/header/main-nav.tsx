'use client';

import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Logo } from '@/components/logo';
import { Brain, Sparkles } from 'lucide-react';

export function MainNav({ title }: { title?: string }) {
  return (
    <div className='flex gap-6 md:gap-10'>
      <Link href='/' className='flex items-center space-x-2'>
        <div className='flex items-center gap-2'>
          <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'>
            <Brain className='h-5 w-5' />
          </div>
          <div className='flex items-center gap-1'>
            <span className='hidden font-bold sm:inline-block'>
              {title || siteConfig.name}
            </span>
            <div className='flex items-center gap-1 rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'>
              <Sparkles className='h-3 w-3' />
              AI
            </div>
          </div>
        </div>
      </Link>
      <nav className='hidden gap-6 md:flex'>
        <Link
          href='/'
          className='flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60'
        >
          首页
        </Link>
        <Link
          href='#ai'
          className='flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60'
        >
          AI 对话
        </Link>
        <Link
          href='#ai绘画'
          className='flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60'
        >
          AI 绘画
        </Link>
        <Link
          href='#ai编程'
          className='flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60'
        >
          AI 编程
        </Link>
        <Link
          href='#后端开发'
          className='flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60'
        >
          后端开发
        </Link>
        <Link
          href='#设计工具'
          className='flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60'
        >
          设计工具
        </Link>
        <Link
          href='#工具'
          className='flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60'
        >
          开发工具
        </Link>
        <Link
          href='#about'
          className='flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60'
        >
          关于
        </Link>
      </nav>
    </div>
  );
}
