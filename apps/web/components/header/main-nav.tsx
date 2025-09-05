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
          Home
        </Link>
        <Link
          href='#category-ai'
          className='flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60'
        >
          AI Tools
        </Link>
        <Link
          href='#category-react'
          className='flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60'
        >
          Development
        </Link>
        <Link
          href='#category-design-tools'
          className='flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60'
        >
          Design
        </Link>
        <Link
          href='#about'
          className='flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60'
        >
          About
        </Link>
      </nav>
    </div>
  );
}
