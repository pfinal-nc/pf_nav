"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@m-nav/ui/components/card';
import { Button } from '@m-nav/ui/components/button';
import { ExternalLink, Sparkles } from 'lucide-react';

export function SiteCard({
  title,
  description,
  href,
  category,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  category: string;
  icon: string;
}) {
  const [faviconUrl, setFaviconUrl] = useState<string | null>(icon || null);
  const [faviconError, setFaviconError] = useState(false);

  useEffect(() => {
    if (!icon && href) {
      try {
        const url = new URL(href);
        setFaviconUrl(url.origin + '/favicon.ico');
        setFaviconError(false);
      } catch {
        setFaviconUrl(null);
        setFaviconError(true);
      }
    } else {
      setFaviconUrl(icon || null);
      setFaviconError(false);
    }
  }, [icon, href]);

  const isAI = category === 'AI';

  return (
    <a 
      href={href} 
      target='_blank' 
      rel='noreferrer'
      className='block transition-transform hover:scale-[1.02]'
      aria-label={`访问 ${title} - ${description}`}
    >
      <Card className='group relative overflow-hidden border-0 bg-white/50 shadow-sm transition-all duration-300 hover:shadow-lg dark:bg-gray-800/50 dark:shadow-gray-900/20'>
        {/* AI 标签 */}
        {isAI && (
          <div className='absolute -right-2 -top-2 z-10'>
            <div className='flex items-center gap-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-2 py-1 text-xs font-medium text-white shadow-lg'>
              <Sparkles className='h-3 w-3' aria-hidden="true" />
              <span>AI</span>
            </div>
          </div>
        )}
        
        <CardHeader className='pb-3'>
          <CardTitle className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              {/* 图标区域 */}
              <div className='relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 shadow-sm dark:from-gray-700 dark:to-gray-800'>
                {faviconUrl && !faviconError ? (
                  <Image
                    src={faviconUrl}
                    alt={`${title} 图标`}
                    width={24}
                    height={24}
                    className='rounded'
                    onError={() => setFaviconError(true)}
                  />
                ) : (
                  <span className='text-lg font-bold text-gray-600 dark:text-gray-300' aria-label={`${title} 首字母`}>
                    {title.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>
              
              {/* 标题 */}
              <div className='flex-1 min-w-0'>
                <h3 className='text-sm font-semibold text-gray-900 dark:text-white truncate'>
                  {title}
                </h3>
                {isAI && (
                  <div className='mt-1 flex items-center gap-1'>
                    <div className='h-1.5 w-1.5 rounded-full bg-purple-500' aria-hidden="true"></div>
                    <span className='text-xs text-purple-600 dark:text-purple-400'>AI 工具</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* 外部链接图标 */}
            <div className='h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100'>
              <ExternalLink className='h-3 w-3 text-gray-400' aria-hidden="true" />
            </div>
          </CardTitle>
        </CardHeader>
        
        <CardContent className='pt-0'>
          <CardDescription className='text-xs text-gray-600 dark:text-gray-400 line-clamp-2'>
            {description || '暂无描述'}
          </CardDescription>
          
          {/* 分类标签 */}
          <div className='mt-3 flex items-center justify-between'>
            <span className='inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200'>
              {category}
            </span>
            
            {/* 访问按钮 */}
            <Button
              size='sm'
              variant='outline'
              className='h-7 text-xs'
              onClick={(e) => e.stopPropagation()}
              aria-label={`访问 ${title}`}
            >
              访问
            </Button>
          </div>
        </CardContent>
        
        {/* 悬停效果 */}
        <div className='absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100' aria-hidden="true"></div>
      </Card>
    </a>
  );
}
