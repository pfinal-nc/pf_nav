/*
 * @Author: pfinal liuxuzhu@smm.cn
 * @Date: 2025-07-03 16:55:52
 * @LastEditors: pfinal liuxuzhu@smm.cn
 * @LastEditTime: 2025-07-03 16:57:47
 * @FilePath: /m-nav/apps/web/components/search.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client'

import { useState } from 'react'
import { Search as SearchIcon } from 'lucide-react'
import { Button } from '@m-nav/ui/components/button'
import { Input } from '@m-nav/ui/components/input'

interface SearchProps {
  onSearch: (query: string) => void
  placeholder?: string
}

export function Search({ onSearch, placeholder = "搜索网站..." }: SearchProps) {
  const [query, setQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-md">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-20"
        />
        <Button
          type="submit"
          size="sm"
          className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 px-3"
        >
          搜索
        </Button>
      </div>
    </form>
  )
} 