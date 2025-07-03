'use client'

import { useState, useMemo } from 'react'
import { Search as SearchIcon, X } from 'lucide-react'
import { Button } from '@m-nav/ui/components/button'
import { Input } from '@m-nav/ui/components/input'
import { SiteCard } from './site-card'
import { DatabaseItem } from '@/lib/notion'

interface SearchWithResultsProps {
  allItems: DatabaseItem[]
  placeholder?: string
}

export function SearchWithResults({ 
  allItems, 
  placeholder = "搜索网站..." 
}: SearchWithResultsProps) {
  const [query, setQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  const filteredItems = useMemo(() => {
    if (!query.trim()) return []
    
    const searchTerm = query.toLowerCase()
    return allItems.filter(item => 
      item.title.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm) ||
      item.type.toLowerCase().includes(searchTerm)
    )
  }, [query, allItems])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSearching(true)
    // 搜索逻辑已经在 useMemo 中处理
  }

  const clearSearch = () => {
    setQuery('')
    setIsSearching(false)
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSearch} className="relative w-full max-w-md mb-6">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 pr-20"
          />
          {query && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="absolute right-16 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
          <Button
            type="submit"
            size="sm"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 px-3"
          >
            搜索
          </Button>
        </div>
      </form>

      {isSearching && query && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">
            搜索结果: "{query}" ({filteredItems.length} 个结果)
          </h3>
          {filteredItems.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredItems.map((item) => (
                <SiteCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  href={item.link}
                  category={item.type}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <p>没有找到相关结果</p>
              <p className="text-sm">请尝试其他关键词</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
} 