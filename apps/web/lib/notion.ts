// 'use server';

import { NotionAPI } from 'notion-client';
import { idToUuid, getPageTitle } from 'notion-utils';
import fs from 'fs/promises';
import path from 'path';

// Initialize the Notion client
const notion = new NotionAPI({
  authToken: process.env.NOTION_TOKEN,
  userTimeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
});

// Helper function to get all page IDs from a collection
export default function getAllPageIds(
  collectionQuery: Record<string, any>,
  collectionId: string | undefined,
  collectionView: Record<string, any>,
  viewIds: string[] | undefined
) {
  // Return empty array if any required parameters are missing
  if (!collectionQuery || !collectionId || !viewIds || viewIds.length === 0) {
    return [];
  }

  try {
    // Safely access the collection data
    const collectionData = collectionQuery[collectionId];
    if (!collectionData) return [];

    const viewId = viewIds[0];
    if (!viewId) return [];

    // Type assertion to avoid TypeScript error
    const view = collectionData[viewId] as any;
    if (!view || !view.table_groups || !view.table_groups.results) return [];

    const groups = [];

    for (const group of view.table_groups.results) {
      if (!group?.value?.value) continue;

      const title = group.value.value.value || '';
      const items = view[`results:text:${title}`]?.blockIds || [];

      groups.push({ title, items });
    }

    return groups;
  } catch (error) {
    console.error('Error fetching page IDs:', error);
    return [];
  }
}

// Helper function to get page properties
function getPageProperties(
  pageId: string,
  value: any,
  schema: any,
  prefix = '',
  pageProperties: any[] = []
) {
  if (!value || !schema) return null;

  const propertyMap: Record<string, any> = {};

  Object.keys(schema).forEach((key) => {
    const propertyValue = value.properties?.[key]?.[0]?.[0];
    const propertyName = schema[key]?.name;

    if (propertyName) {
      propertyMap[propertyName.toLowerCase()] = propertyValue;
    }
  });

  return {
    id: pageId,
    title: propertyMap.title || propertyMap.name || '',
    description: propertyMap.description || propertyMap.desc || '',
    link: propertyMap.link || propertyMap.url || '',
    type: propertyMap.type || propertyMap.category || 'other',
    icon: value.icon || '', // 新增，或根据实际情况赋值
  };
}

export interface DatabaseItem {
  id: string;
  title: string;
  description: string;
  link: string;
  type: string;
  icon: string;
}

export interface PageData {
  title: string;
  description: string;
  items: Record<string, DatabaseItem[]>;
}

export const getPageData = async (): Promise<PageData> => {
  // 读取 CSV 文件路径
  const csvPath = path.join(process.cwd(), 'assets/PFinalClub Nav.csv');
  let csvContent: string;
  try {
    csvContent = await fs.readFile(csvPath, 'utf-8');
  } catch (error) {
    console.error('读取 CSV 文件失败:', error);
    throw error;
  }

  // 解析 CSV 内容
  const lines = csvContent.split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) {
    return {
      title: 'PFinalClub 导航',
      description: '精选前端、设计、AI、工具等高质量资源导航',
      items: {},
    };
  }
  const header = lines[0]!.split(',');
  const itemsByType: Record<string, DatabaseItem[]> = {};

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line || !line.trim()) continue;
    const match = line.match(/\s*("[^"]*"|[^,]*)\s*,\s*("[^"]*"|[^,]*)\s*,\s*("[^"]*"|[^,]*)\s*,\s*("[^"]*"|[^,]*)\s*/);
    if (!match || match.length < 5) continue;
    let link = match[1] ?? '';
    let title = match[2] ?? '';
    let desc = match[3] ?? '';
    let type = match[4] ?? '';
    link = link.replace(/^"|"$/g, '');
    title = title.replace(/^"|"$/g, '');
    desc = desc.replace(/^"|"$/g, '');
    type = type.replace(/^"|"$/g, '');
    if (!link && !title && !desc && !type) continue;
    const item: DatabaseItem = {
      id: `${type}-${link || title || String(i)}-${i}`,
      title: title || '',
      description: desc || '',
      link: link || '',
      type: type || 'other',
      icon: '',
    };
    if (!itemsByType[item.type]) {
      itemsByType[item.type] = [];
    }
    itemsByType[item.type]!.push(item);
  }

  return {
    title: 'AI 工具导航',
    description: '精选全球优质人工智能工具，涵盖对话、绘画、编程、办公等各类应用',
    items: itemsByType,
  };
};
