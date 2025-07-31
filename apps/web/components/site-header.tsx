/*
 * @Author: pfinal liuxuzhu@smm.cn
 * @Date: 2025-06-27 16:29:46
 * @LastEditors: pfinal liuxuzhu@smm.cn
 * @LastEditTime: 2025-07-04 17:20:23
 * @FilePath: /m-nav/apps/web/components/site-header.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Link from 'next/link';
import Script from 'next/script';

import { siteConfig } from '@/config/site';
import { MainNav } from '@/components/header/main-nav';
import { ModeSwitcher } from '@/components/header/mode-switcher';
import { Button } from '@m-nav/ui/components/button';
import { Github } from 'lucide-react';

export function SiteHeader({ title }: { title?: string }) {
  return (
    <>
      <header className='border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='container-wrapper'>
          <div className='container flex h-14 items-center gap-2 md:gap-4'>
            <MainNav title={title} />
            <div className='ml-auto flex items-center gap-2 md:flex-1 md:justify-end'>
              <nav className='flex items-center gap-0.5'>
                <Button
                  asChild
                  variant='ghost'
                  size='icon'
                  className='h-8 w-8 px-0'
                >
                  <Link href={siteConfig.url} target='_blank' rel='noreferrer'>
                    <Github className='size-4' />
                    <span className='sr-only'>GitHub</span>
                  </Link>
                </Button>
                <ModeSwitcher />
              </nav>
            </div>
          </div>
        </div>
      </header>
      
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2154665617309406"
        data-cfasync="false"
        crossOrigin="anonymous"
      />
      <Script
        id="ad-script"
        strategy="afterInteractive"
        data-cfasync="false"
        dangerouslySetInnerHTML={{
          __html: `
          (function(d,z,s){s.src='https://'+d+'/400/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('vemtoutcheeg.com',9524715,document.createElement('script'))
          `
        }}
      />
      <Script
        async
        src="https://fenoofaussut.net/act/files/tag.min.js?z=9521820"
        data-cfasync="false"
      />
    </>
  );
}

