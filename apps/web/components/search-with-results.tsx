'use client'

import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@m-nav/ui/components/input';
import { DatabaseItem } from '@/lib/notion';
import { SiteCard } from './site-card';

interface SearchWithResultsProps {
  allItems: DatabaseItem[];
}

export function SearchWithResults({ allItems }: SearchWithResultsProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return allItems.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.type.toLowerCase().includes(query)
    );
  }, [allItems, searchQuery]);

  return (
    <div className='w-full space-y-6'>
      {/* 搜索框 */}
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none'>
          <Search className='h-5 w-5 text-gray-400' />
        </div>
        <Input
          type='text'
          placeholder='Search AI tools, tech resources...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='pl-12 h-12 text-lg border-2 border-gray-200 focus:border-purple-500 focus:ring-purple-500 dark:border-gray-700 dark:focus:border-purple-400 dark:focus:ring-purple-400 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm'
        />
        {searchQuery && (
          <div className='absolute inset-y-0 right-0 flex items-center pr-4'>
            <button
              onClick={() => setSearchQuery('')}
              className='text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
            >
              ✕
            </button>
          </div>
        )}
      </div>

      {/* 搜索结果 */}
      {searchQuery && (
        <div className='space-y-4'>
          <div className='flex items-center justify-between'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              Search Results
            </h3>
            <span className='text-sm text-gray-600 dark:text-gray-400'>
              Found {filteredItems.length} results
            </span>
          </div>
          
          {filteredItems.length > 0 ? (
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
              {filteredItems.map((item) => (
                <SiteCard
                  key={item.id}
                  title={item.title}
                  description={item.description || ''}
                  href={item.link}
                  category={item.type}
                  icon={item.icon || ''}
                />
              ))}
            </div>
          ) : (
            <div className='text-center py-12'>
              <div className='mx-auto h-12 w-12 text-gray-400 mb-4'>
                <Search className='h-full w-full' />
              </div>
              <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-2'>
                No results found
              </h3>
              <p className='text-gray-600 dark:text-gray-400'>
                Try searching with different keywords
              </p>
            </div>
          )}
        </div>
      )}

      {/* 热门搜索建议 */}
      {!searchQuery && (
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-gray-700 dark:text-gray-300'>
            Popular Searches
          </h3>
          <div className='flex flex-wrap gap-2'>
            {['ChatGPT', 'AI Painting', 'Code Assistant', 'Translation', 'Image Generation'].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className='inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:hover:bg-purple-900/50 transition-colors'
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 