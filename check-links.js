const fs = require('fs');
const https = require('https');
const http = require('http');

// 读取CSV文件
const csvData = fs.readFileSync('/Users/pfinal/Documents/m-nav/apps/web/assets/PFinalClub Nav.csv', 'utf8');
const lines = csvData.split('\n');

// 存储无效链接
const invalidLinks = [];
const validLinks = [];

// 检查链接的函数
function checkLink(url, title, type, retries = 3) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    
    const request = client.get(url, { timeout: 5000 }, (response) => {
      if (response.statusCode >= 200 && response.statusCode < 400) {
        console.log(`✓ ${url} (${response.statusCode})`);
        validLinks.push({ url, title, type });
        resolve(true);
      } else if (response.statusCode === 429 && retries > 0) {
        // 处理请求过于频繁的情况
        console.log(`↺ ${url} (429 Too Many Requests, retrying...)`);
        setTimeout(() => {
          checkLink(url, title, type, retries - 1).then(resolve);
        }, 2000);
      } else {
        console.log(`✗ ${url} (${response.statusCode})`);
        invalidLinks.push({ url, title, type, statusCode: response.statusCode });
        resolve(false);
      }
    });

    request.on('error', (err) => {
      console.log(`✗ ${url} (Error: ${err.message})`);
      invalidLinks.push({ url, title, type, error: err.message });
      resolve(false);
    });

    request.on('timeout', () => {
      console.log(`✗ ${url} (Timeout)`);
      invalidLinks.push({ url, title, type, error: 'Timeout' });
      request.destroy();
      resolve(false);
    });

    request.setTimeout(5000);
  });
}

// 解析CSV数据
const entries = [];
for (let i = 1; i < lines.length; i++) {
  if (lines[i].trim() === '') continue;
  
  const [url, title, desc, type] = lines[i].split(',');
  if (url && url.startsWith('http')) {
    entries.push({ url, title, type });
  }
}

// 按顺序检查链接
async function checkAllLinks() {
  console.log(`Checking ${entries.length} links...\n`);
  
  for (let i = 0; i < entries.length; i++) {
    const { url, title, type } = entries[i];
    await checkLink(url, title, type);
    // 添加延迟以避免请求过于频繁
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log('\n--- Summary ---');
  console.log(`Valid links: ${validLinks.length}`);
  console.log(`Invalid links: ${invalidLinks.length}`);
  
  if (invalidLinks.length > 0) {
    console.log('\nInvalid links:');
    invalidLinks.forEach(link => {
      console.log(`  ${link.url} (${link.title}) - ${link.statusCode || link.error}`);
    });
  }
  
  // 保存结果到文件
  fs.writeFileSync('/Users/pfinal/Documents/m-nav/invalid-links.json', JSON.stringify(invalidLinks, null, 2));
  console.log('\nInvalid links saved to invalid-links.json');
}

checkAllLinks();