/*
 * @Author: pfinal liuxuzhu@smm.cn
 * @Date: 2025-06-27 16:29:46
 * @LastEditors: pfinal liuxuzhu@smm.cn
 * @LastEditTime: 2025-07-03 13:49:37
 * @FilePath: /m-nav/apps/web/app/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { SiteContent } from '@/components/site-content';
import { Suspense } from 'react';
import { GridSkeleton } from '@/components/GridSkeleton';

// 添加静态生成配置
export const dynamic = 'force-static'
export const revalidate = 3600 // 可选：重新验证时间（秒）

export default async function Page() {
  return (
    <div data-wrapper='' className='border-grid flex flex-1 flex-col min-h-svh'>
      <SiteHeader />
      <main className='flex flex-1 flex-col container-wrapper p-4'>
        <Suspense fallback={<GridSkeleton />}>
          <SiteContent />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  );
}