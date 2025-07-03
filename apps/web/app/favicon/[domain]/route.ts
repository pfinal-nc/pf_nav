import { NextRequest } from 'next/server';
import { getFavicons, proxyFavicon } from '@/lib/server'; // 更正导入
import { getPageData } from '@/lib/notion';

// 添加静态参数生成函数
export async function generateStaticParams() {
  try {
    const data = await getPageData();
    const domains = new Set<string>();
    
    // 从所有项目中提取域名
    Object.values(data.items).forEach(items => {
      items.forEach(item => {
        try {
          const url = new URL(item.link);
          domains.add(url.hostname);
        } catch (e) {
          // 忽略无效的 URL
        }
      });
    });

    return Array.from(domains).map(domain => ({
      domain: domain
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return []; // 返回空数组作为后备
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ domain: string }> }
) {
  const { domain } = await params;
  const startTime = Date.now();
  const asciiDomain = new URL(`http://${domain}`).hostname;
  
  const svg404 = () => {
    const firstLetter = domain.charAt(0).toUpperCase();
    const svgContent = `
      <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#cccccc"/>
        <text x="50%" y="50%" font-size="48" text-anchor="middle" dominant-baseline="middle" fill="#000000">${firstLetter}</text>
      </svg>
    `;
    return new Response(svgContent, {
      status: 404,
      headers: {
        'Cache-Control': 'public, max-age=86400',
        'Content-Type': 'image/svg+xml',
      },
    });
  };

  // Validate domain name format
  if (!/([a-z0-9-]+\.)+[a-z0-9]{1,}$/.test(asciiDomain)) {
    return svg404();
  }

  let icons: { sizes?: string; href: string }[] = [];
  let selectedIcon: { sizes?: string; href: string } | undefined;

  const headers = new Headers(request.headers);
  headers.delete('host');
  headers.delete('Content-Length');

  let url = `http://${asciiDomain}`;
  try {
    const data = await getFavicons({ url, headers });
    console.debug('[DEBUG__[domain]/route.ts-data]', data);
    icons = data.icons;
  } catch (error) {
    console.error(error);
  }

  if (icons.length === 0) {
    url = `https://${asciiDomain}`;
    try {
      // Retry fetching favicons using HTTPS
      const data = await getFavicons({ url, headers });
      icons = data.icons;
    } catch (error) {
      console.error(error);
    }
  }

  // If no icons are found, fetch from alternative sources
  if (icons.length === 0) {
    return proxyFavicon({ domain: asciiDomain });
  }
  selectedIcon = icons[0];

  try {
    if (selectedIcon && selectedIcon.href.includes('data:image')) {
      const base64Data = selectedIcon.href.split(',')[1];
      if (base64Data) {
        const iconBuffer = Buffer.from(base64Data, 'base64');
        // Calculate execution time
        const endTime = Date.now();
        const executionTime = endTime - startTime;

        return new Response(iconBuffer, {
          status: 200,
          headers: {
            'Cache-Control': 'public, max-age=86400',
            'Content-Type': selectedIcon.href.replace(
              /data:(image.*?);.*/,
              '$1'
            ),
            'Content-Length': iconBuffer.byteLength.toString(),
            'X-Execution-Time': `${executionTime} ms`,
          },
        });
      }
    }

    if (!selectedIcon) {
      return svg404();
    }

    const iconResponse = await fetch(selectedIcon.href, { headers });
    // Calculate execution time
    const endTime = Date.now();
    const executionTime = endTime - startTime;
    if (!iconResponse.ok) return svg404();
    const iconBuffer = await iconResponse.arrayBuffer();

    return new Response(iconBuffer, {
      status: 200,
      headers: {
        'Cache-Control': 'public, max-age=86400',
        'Content-Type': iconResponse.headers.get('Content-Type') || 'image/x-icon',
        'Content-Length': iconResponse.headers.get('Content-Length') || '',
        'X-Execution-Time': `${executionTime} ms`,
      },
    });
  } catch (error) {
    console.error('Error fetching favicon:', error);
    return svg404();
  }
}