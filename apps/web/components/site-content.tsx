import { DatabaseItem, getPageData } from '@/lib/notion';
import { SiteCard } from './site-card';
import { Brain, Palette, Zap, MessageSquare, Code, Briefcase, Settings, BarChart3 } from 'lucide-react';

// 分类图标映射
const categoryIcons: Record<string, any> = {
  'AI': Brain,
  'AI Painting': Palette,
  'AI Writing': MessageSquare,
  'AI Programming': Code,
  'AI Video': Zap,
  'AI Platform': Brain,
  'AI Music': Zap,
  'AI Office': Briefcase,
  'AI Analytics': BarChart3,
  'AI Translation': MessageSquare,
  'Icon': Palette,
  'React': Code,
  'Vue': Code,
  'JavaScript': Code,
  'CSS Framework': Palette,
  'UI': Palette,
  'Tools': Settings,
  'Projects': Briefcase,
  'MCP': MessageSquare,
  'Backend': Code,
  'Dev Tools': Settings,
  'DevOps': Settings,
  'Design Tools': Palette,
  'Database': Settings,
  'Cloud Services': Settings,
  'Testing': Settings,
  'API Tools': Settings,
  'Productivity': Settings,
  'Operating System': Settings,
  'Package Manager': Settings,
  'Terminal': Settings,
  'Build Tools': Settings,
  'Code Quality': Settings,
  'Editor': Settings,
  'Server': Settings,
};

// 分类颜色映射
const categoryColors: Record<string, string> = {
  'AI': 'bg-gradient-to-r from-purple-500 to-pink-500',
  'AI Painting': 'bg-gradient-to-r from-pink-500 to-rose-500',
  'AI Writing': 'bg-gradient-to-r from-blue-500 to-indigo-500',
  'AI Programming': 'bg-gradient-to-r from-green-500 to-emerald-500',
  'AI Video': 'bg-gradient-to-r from-red-500 to-pink-500',
  'AI Platform': 'bg-gradient-to-r from-purple-500 to-violet-500',
  'AI Music': 'bg-gradient-to-r from-yellow-500 to-orange-500',
  'AI Office': 'bg-gradient-to-r from-blue-500 to-cyan-500',
  'AI Analytics': 'bg-gradient-to-r from-indigo-500 to-purple-500',
  'AI Translation': 'bg-gradient-to-r from-teal-500 to-cyan-500',
  'Icon': 'bg-gradient-to-r from-blue-500 to-cyan-500',
  'React': 'bg-gradient-to-r from-cyan-500 to-blue-500',
  'Vue': 'bg-gradient-to-r from-green-500 to-emerald-500',
  'JavaScript': 'bg-gradient-to-r from-yellow-500 to-orange-500',
  'CSS Framework': 'bg-gradient-to-r from-pink-500 to-rose-500',
  'UI': 'bg-gradient-to-r from-indigo-500 to-purple-500',
  'Tools': 'bg-gradient-to-r from-gray-500 to-slate-500',
  'Projects': 'bg-gradient-to-r from-emerald-500 to-teal-500',
  'MCP': 'bg-gradient-to-r from-violet-500 to-purple-500',
  'Backend': 'bg-gradient-to-r from-orange-500 to-red-500',
  'Dev Tools': 'bg-gradient-to-r from-slate-500 to-gray-500',
  'DevOps': 'bg-gradient-to-r from-red-500 to-orange-500',
  'Design Tools': 'bg-gradient-to-r from-pink-500 to-purple-500',
  'Database': 'bg-gradient-to-r from-blue-500 to-indigo-500',
  'Cloud Services': 'bg-gradient-to-r from-sky-500 to-blue-500',
  'Testing': 'bg-gradient-to-r from-green-500 to-teal-500',
  'API Tools': 'bg-gradient-to-r from-cyan-500 to-teal-500',
  'Productivity': 'bg-gradient-to-r from-emerald-500 to-green-500',
  'Operating System': 'bg-gradient-to-r from-gray-500 to-slate-500',
  'Package Manager': 'bg-gradient-to-r from-orange-500 to-yellow-500',
  'Terminal': 'bg-gradient-to-r from-slate-500 to-gray-500',
  'Build Tools': 'bg-gradient-to-r from-yellow-500 to-orange-500',
  'Code Quality': 'bg-gradient-to-r from-red-500 to-pink-500',
  'Editor': 'bg-gradient-to-r from-indigo-500 to-purple-500',
  'Server': 'bg-gradient-to-r from-gray-500 to-slate-500',
};

export const SiteContent = async () => {
  const siteData = await getPageData();

  // 重新排序，让 AI 分类优先显示
  const sortedTypes = Object.keys(siteData.items || {}).sort((a, b) => {
    if (a === 'AI') return -1;
    if (b === 'AI') return 1;
    return a.localeCompare(b);
  });

  // 计算总工具数量
  const totalTools = Object.values(siteData.items || {}).reduce((acc: number, items: any) => acc + items.length, 0);
  const aiToolsCount = siteData.items?.AI?.length || 0;

  return (
    <div className='space-y-12'>
      {/* 统计信息 */}
      <div className='rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 border border-purple-100 dark:border-purple-800'>
        <div className='flex items-center gap-3 mb-4'>
          <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white'>
            <BarChart3 className='h-5 w-5' />
          </div>
          <h2 className='text-xl font-bold text-gray-900 dark:text-white'>Tool Statistics</h2>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          <div className='text-center'>
            <div className='text-2xl font-bold text-purple-600 dark:text-purple-400'>{totalTools}</div>
            <div className='text-sm text-gray-600 dark:text-gray-400'>Total Tools</div>
          </div>
          <div className='text-center'>
            <div className='text-2xl font-bold text-pink-600 dark:text-pink-400'>{aiToolsCount}</div>
            <div className='text-sm text-gray-600 dark:text-gray-400'>AI Tools</div>
          </div>
          <div className='text-center'>
            <div className='text-2xl font-bold text-blue-600 dark:text-blue-400'>{sortedTypes.length}</div>
            <div className='text-sm text-gray-600 dark:text-gray-400'>Categories</div>
          </div>
          <div className='text-center'>
            <div className='text-2xl font-bold text-green-600 dark:text-green-400'>{Math.round((aiToolsCount / totalTools) * 100)}%</div>
            <div className='text-sm text-gray-600 dark:text-gray-400'>AI Ratio</div>
          </div>
        </div>
      </div>

      {/* 工具分类 */}
      {sortedTypes.map((type: string) => {
        const IconComponent = categoryIcons[type] || Settings;
        const colorClass = categoryColors[type] || 'bg-gradient-to-r from-gray-500 to-slate-500';
        
        return (
          <div key={type} className='group' id={`category-${type.toLowerCase().replace(/\s+/g, '-')}`}>
            {/* 分类标题 */}
            <div className='mb-6 flex items-center gap-3'>
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClass} text-white shadow-lg`}>
                <IconComponent className='h-5 w-5' />
              </div>
              <div>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white capitalize'>{type}</h2>
                <p className='text-sm text-gray-600 dark:text-gray-400'>
                  {siteData.items?.[type]?.length || 0} tools
                </p>
              </div>
            </div>
            
            {/* 工具卡片网格 */}
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
              {siteData.items?.[type]?.map((item: DatabaseItem, index: number) => (
                <SiteCard
                  key={`${type}-${item.id}-${index}`}
                  title={item.title}
                  description={item.description || ''}
                  href={item.link}
                  category={type}
                  icon={item.icon || ''}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
