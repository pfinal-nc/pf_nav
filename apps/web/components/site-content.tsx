/*
 * @Author: pfinal liuxuzhu@smm.cn
 * @Date: 2025-06-27 16:29:46
 * @LastEditors: pfinal liuxuzhu@smm.cn
 * @LastEditTime: 2025-07-03 18:33:23
 * @FilePath: /m-nav/apps/web/components/site-content.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { DatabaseItem, getPageData } from '@/lib/notion';
import { SiteCard } from './site-card';

export const SiteContent = async () => {
  const siteData = await getPageData();

  return Object.keys(siteData.items || {}).map((type: string) => (
    <div key={type} className='mb-8'>
      <h2 className='text-xl font-semibold mb-4 capitalize'>{type}</h2>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {siteData.items?.[type]?.map((item: DatabaseItem) => (
          <SiteCard
            key={item.id}
            title={item.title}
            description={item.description || ''}
            href={item.link}
            category={type}
          />
        ))}
      </div>
    </div>
  ));
};
